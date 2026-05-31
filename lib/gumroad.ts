export interface GumroadCover {
    id: string;
    url: string | null;
    original_url: string | null;
    thumbnail: string | null;
    type: "image" | "video" | string;
    filetype: string | null;
    width?: number;
    height?: number;
}

export interface GumroadProduct {
    id: string;
    name: string;
    description: string | null;
    custom_summary: string | null;
    custom_permalink: string | null;
    published: boolean;
    deleted: boolean;
    formatted_price: string;
    price: number;
    currency: string;
    short_url: string;
    thumbnail_url: string | null;
    preview_url: string | null;
    main_cover_id: string | null;
    covers: GumroadCover[];
    tags: string[];
}

interface GumroadProductsResponse {
    success: boolean;
    products?: GumroadProduct[];
    message?: string;
}

export type GumroadProductsResult =
    | {
          status: "ready";
          products: GumroadProduct[];
      }
    | {
          status: "missing_token" | "error";
          products: [];
          message?: string;
      };

const GUMROAD_PRODUCTS_ENDPOINT = "https://api.gumroad.com/v2/products";

export function stripHtml(value: string | null | undefined) {
    if (!value) {
        return "";
    }

    return value
        .replace(/<[^>]*>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, "\"")
        .replace(/&#39;/g, "'")
        .replace(/\s+/g, " ")
        .trim();
}

export function getProductImageUrl(product: GumroadProduct) {
    const imageCovers = product.covers.filter(
        (cover) => cover.type === "image" && cover.url,
    );
    const mainCover = imageCovers.find(
        (cover) => cover.id === product.main_cover_id,
    );

    return (
        product.thumbnail_url ??
        mainCover?.url ??
        imageCovers[0]?.url ??
        product.preview_url ??
        null
    );
}

export async function getGumroadProducts(): Promise<GumroadProductsResult> {
    const accessToken = process.env.GUMROAD_ACCESS_TOKEN;

    if (!accessToken) {
        return {
            status: "missing_token",
            products: [],
            message: "GUMROAD_ACCESS_TOKEN is not configured.",
        };
    }

    const url = new URL(GUMROAD_PRODUCTS_ENDPOINT);
    url.searchParams.set("access_token", accessToken);

    try {
        const response = await fetch(url.toString(), {
            method: "GET",
            next: { revalidate: 3600 },
        });

        if (!response.ok) {
            return {
                status: "error",
                products: [],
                message: `Gumroad API returned ${response.status}.`,
            };
        }

        const data = (await response.json()) as GumroadProductsResponse;

        if (!data.success || !Array.isArray(data.products)) {
            return {
                status: "error",
                products: [],
                message: data.message ?? "Gumroad API did not return products.",
            };
        }

        return {
            status: "ready",
            products: data.products.filter(
                (product) => product.published && !product.deleted,
            ),
        };
    } catch (error) {
        return {
            status: "error",
            products: [],
            message:
                error instanceof Error
                    ? error.message
                    : "Unable to fetch Gumroad products.",
        };
    }
}
