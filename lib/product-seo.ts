import type { GumroadProduct } from "./gumroad";
import { stripHtml } from "./gumroad";

type Locale = "en" | "th" | string;

function slugify(value: string) {
    return value
        .toLowerCase()
        .replace(/&/g, " and ")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 90);
}

export function getProductSlug(product: GumroadProduct) {
    if (product.custom_permalink) {
        return product.custom_permalink;
    }

    if (product.short_url) {
        const path = new URL(product.short_url).pathname;
        const slug = path.split("/").filter(Boolean).pop();

        if (slug) {
            return slug;
        }
    }

    return slugify(product.name);
}

function inferProductType(product: GumroadProduct) {
    const source = `${product.name} ${product.tags.join(" ")}`.toLowerCase();

    return {
        isCanva: source.includes("canva"),
        isWebsite: source.includes("website") || source.includes("web"),
        isTemplate: source.includes("template"),
        isFlorist:
            source.includes("florist") ||
            source.includes("flower") ||
            source.includes("ดอกไม้"),
        isBusiness: source.includes("business") || source.includes("shop"),
    };
}

function getEnglishSearchPhrase(product: GumroadProduct) {
    const traits = inferProductType(product);

    if (traits.isFlorist) {
        return traits.isCanva
            ? "Canva Website Template for Flower Shops"
            : "Website Template for Flower Shops";
    }

    if (traits.isWebsite && traits.isCanva) {
        return "Canva Website Template for Small Shops";
    }

    if (traits.isWebsite) {
        return "Website Template for Small Businesses";
    }

    if (traits.isCanva) {
        return "Canva Template for Small Businesses";
    }

    return "Digital Template for Small Businesses";
}

function getThaiSearchPhrase(product: GumroadProduct) {
    const traits = inferProductType(product);

    if (traits.isFlorist) {
        return traits.isCanva
            ? "Canva Website Template สำหรับร้านดอกไม้"
            : "Website Template สำหรับร้านดอกไม้";
    }

    if (traits.isWebsite && traits.isCanva) {
        return "Canva Website Template สำหรับร้านค้าเล็ก";
    }

    if (traits.isWebsite) {
        return "Website Template สำหรับธุรกิจขนาดเล็ก";
    }

    if (traits.isCanva) {
        return "Canva Template สำหรับธุรกิจขนาดเล็ก";
    }

    return "Digital Template สำหรับธุรกิจขนาดเล็ก";
}

export function getProductSeoContent(product: GumroadProduct, locale: Locale) {
    const traits = inferProductType(product);
    const plainDescription = stripHtml(
        product.custom_summary ?? product.description,
    );
    const isThai = locale === "th";

    if (isThai) {
        const searchPhrase = getThaiSearchPhrase(product);
        const audience = traits.isFlorist
            ? [
                  "เจ้าของร้านดอกไม้ที่กำลังหา Canva website template หรือหน้าโปรโมตที่ดูเป็นมืออาชีพ",
                  "ฟรีแลนซ์หรือทีมเล็กที่ต้องการ template เริ่มต้นเร็วขึ้น",
                  "แบรนด์ที่อยากนำเสนอสินค้า บริการ และช่องทางติดต่อให้ดูเป็นระบบ",
              ]
            : [
                  "เจ้าของธุรกิจขนาดเล็กที่กำลังหา website template หรือ Canva template ที่ปรับใช้ได้เร็ว",
                  "คนทำงานออนไลน์ที่อยากลดเวลาจัดหน้าและเริ่มจากโครงสร้างที่ดี",
                  "ฟรีแลนซ์หรือ creator ที่ต้องการ template สำหรับต่อยอดงานจริง",
              ];

        const valuePoints = [
            traits.isCanva
                ? "แก้ไขต่อได้ใน Canva เหมาะกับคนที่อยากปรับสี รูปภาพ และข้อความเอง"
                : "ออกแบบให้เริ่มใช้งานง่ายและนำไปปรับให้เข้ากับ workflow ของคุณได้",
            traits.isWebsite
                ? "ช่วยวางโครงสร้างการนำเสนอข้อมูลบนหน้าเว็บให้ชัดเจนขึ้น"
                : "ช่วยให้การจัดระบบไฟล์หรือข้อมูลดูเป็นระเบียบมากขึ้น",
            "เหมาะสำหรับใช้เป็นจุดเริ่มต้น ลดเวลาจากการเริ่มงานจากหน้าว่าง",
        ];

        return {
            metaTitle: `${product.name} | ${searchPhrase}`,
            metaDescription: `${product.name} คือ ${searchPhrase} ที่แก้ไขต่อได้ เหมาะกับ small shop, freelancer และธุรกิจสร้างสรรค์ที่อยากมีหน้าเว็บหรือหน้าโปรโมตแบบมืออาชีพ`,
            eyebrow: searchPhrase,
            intro:
                plainDescription ||
                `${product.name} เป็น ${searchPhrase} ที่ช่วยให้คุณเริ่มต้นหน้าเว็บหรือหน้าโปรโมตได้เร็วขึ้น พร้อมโครงสร้างที่นำไปปรับใช้กับงานจริงได้ง่าย`,
            originalTake: traits.isCanva
                ? "ฉันมองสินค้านี้ในฐานะ template ที่ควรช่วยให้เจ้าของธุรกิจโฟกัสกับเนื้อหาและแบรนด์ของตัวเองได้เร็วขึ้น โดยไม่ต้องเริ่มออกแบบทุกส่วนจากศูนย์"
                : "สินค้านี้ถูกจัดวางให้เป็น resource ที่หยิบไปใช้ต่อได้จริง เหมาะกับงานที่ต้องการความเรียบร้อย ชัดเจน และประหยัดเวลา",
            audienceTitle: "เหมาะกับใคร",
            valueTitle: "สินค้านี้ช่วยอะไรได้บ้าง",
            workflowTitle: "วิธีนำไปใช้งาน",
            gumroadTitle: "รายละเอียดสินค้า",
            audience,
            valuePoints,
            workflow: [
                "กดซื้อสินค้าและรับลิงก์เข้าถึงไฟล์หลังชำระเงิน",
                "เปิดไฟล์หรือ template แล้วอ่านรายละเอียดเฉพาะของสินค้านั้น",
                "ปรับข้อความ รูปภาพ สี หรือเนื้อหาให้เข้ากับแบรนด์และงานของคุณ",
            ],
            note: "รายละเอียดไฟล์ เงื่อนไขการใช้งาน และข้อมูลล่าสุดของสินค้าจะแสดงในขั้นตอนการซื้อ",
        };
    }

    const searchPhrase = getEnglishSearchPhrase(product);
    const audience = traits.isFlorist
        ? [
              "Flower shop owners searching for a Canva website template or a polished promotional page without starting from a blank canvas.",
              "Small creative businesses that need a clear way to present offers, visuals, and contact details.",
              "Freelancers or studio teams who want a practical template foundation for client-facing work.",
          ]
        : [
              "Small business owners searching for a website template or Canva template they can adapt quickly.",
              "Creators and freelancers who want a cleaner starting point for online workflows.",
              "Teams that want reusable structure instead of rebuilding the same setup from scratch.",
          ];

    const valuePoints = [
        traits.isCanva
            ? "Editable in Canva, so you can adjust copy, colors, imagery, and brand details without a design-heavy setup."
            : "Designed as a practical starting point that can be adapted to your own workflow.",
        traits.isWebsite
            ? "Helps organize product, service, and contact information into a clearer web-style presentation."
            : "Helps turn scattered ideas or assets into a more organized digital workflow.",
        "Useful when you want to move faster while still keeping the final result structured and intentional.",
    ];

    return {
        metaTitle: `${product.name} | ${searchPhrase}`,
        metaDescription: `${product.name} is a ${searchPhrase} for small shops, freelancers, and creative businesses that want a polished online presence without starting from scratch.`,
        eyebrow: searchPhrase,
        intro:
            plainDescription ||
            `${product.name} is a practical ${searchPhrase} made to help you launch a clearer web or promotional page faster.`,
        originalTake: traits.isCanva
            ? "I see this as a template that should help business owners spend less time assembling the page and more time refining the message, visuals, and offer."
            : "This resource is framed as a practical starting point: structured enough to save time, flexible enough to adapt to your own project.",
        audienceTitle: "Who this is for",
        valueTitle: "How it helps",
        workflowTitle: "How to use it",
        gumroadTitle: "Product details",
        audience,
        valuePoints,
        workflow: [
            "Buy securely and receive product access after checkout.",
            "Open the product files or template and review the product-specific notes.",
            "Customize copy, images, colors, or content so it fits your brand and workflow.",
        ],
        note: "Exact file contents, license notes, and the latest product details are shown during checkout.",
    };
}
