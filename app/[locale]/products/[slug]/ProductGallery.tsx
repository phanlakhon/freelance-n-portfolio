"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, PackageOpen, X } from "lucide-react";
import type { GumroadCover } from "@/lib/gumroad";

interface ProductGalleryProps {
    productName: string;
    imageUrl: string | null;
    covers: GumroadCover[];
}

export default function ProductGallery({
    productName,
    imageUrl,
    covers,
}: ProductGalleryProps) {
    const images = covers
        .filter((cover) => cover.type === "image" && cover.url)
        .map((cover) => ({
            id: cover.id,
            url: cover.url as string,
        }));
    const fallbackImages = imageUrl
        ? [{ id: "main", url: imageUrl }]
        : [];
    const galleryImages = images.length > 0 ? images : fallbackImages;
    const [selectedImage, setSelectedImage] = useState(
        galleryImages[0]?.url ?? imageUrl,
    );
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const selectedIndex = Math.max(
        galleryImages.findIndex((image) => image.url === selectedImage),
        0,
    );

    const showImage = (index: number) => {
        const nextImage =
            galleryImages[(index + galleryImages.length) % galleryImages.length];

        if (nextImage) {
            setSelectedImage(nextImage.url);
        }
    };

    return (
        <div className="min-w-0">
            <button
                type="button"
                onClick={() => selectedImage && setLightboxOpen(true)}
                className="relative block w-full aspect-[4/3] overflow-hidden bg-neutral-100 border border-neutral-200 text-left dark:bg-neutral-900 dark:border-neutral-800"
                aria-label={`Open ${productName} image preview`}
            >
                {selectedImage ? (
                    <img
                        src={selectedImage}
                        alt={productName}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center">
                        <PackageOpen className="w-16 h-16 text-neutral-300" />
                    </div>
                )}
            </button>

            {galleryImages.length > 1 && (
                <div className="mt-4 grid grid-cols-4 gap-3">
                    {galleryImages.slice(0, 8).map((image, index) => {
                        const isSelected = image.url === selectedImage;

                        return (
                            <button
                                key={image.id}
                                type="button"
                                onClick={() => {
                                    setSelectedImage(image.url);
                                }}
                                className={`aspect-[4/3] overflow-hidden bg-neutral-100 border transition-colors dark:bg-neutral-900 ${
                                    isSelected
                                        ? "border-accent"
                                        : "border-neutral-200 hover:border-accent/70 dark:border-neutral-800"
                                }`}
                                aria-label={`View ${productName} image ${index + 1}`}
                            >
                                <img
                                    src={image.url}
                                    alt=""
                                    className="h-full w-full object-cover"
                                />
                            </button>
                        );
                    })}
                </div>
            )}

            {lightboxOpen && selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-neutral-950/95 px-4 py-6"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${productName} image gallery`}
                >
                    <button
                        type="button"
                        onClick={() => setLightboxOpen(false)}
                        className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-accent hover:text-accent"
                        aria-label="Close image preview"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    {galleryImages.length > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={() => showImage(selectedIndex - 1)}
                                className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 text-white transition-colors hover:border-accent hover:text-accent sm:inline-flex"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>
                            <button
                                type="button"
                                onClick={() => showImage(selectedIndex + 1)}
                                className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 text-white transition-colors hover:border-accent hover:text-accent sm:inline-flex"
                                aria-label="Next image"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>
                        </>
                    )}

                    <div className="flex h-full items-center justify-center">
                        <img
                            src={selectedImage}
                            alt={productName}
                            className="max-h-full max-w-full object-contain"
                        />
                    </div>

                    {galleryImages.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3">
                            {galleryImages.map((image, index) => (
                                <button
                                    key={image.id}
                                    type="button"
                                    onClick={() => showImage(index)}
                                    className={`h-2.5 w-2.5 rounded-full transition-colors ${
                                        image.url === selectedImage
                                            ? "bg-accent"
                                            : "bg-white/40 hover:bg-white/70"
                                    }`}
                                    aria-label={`View image ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
