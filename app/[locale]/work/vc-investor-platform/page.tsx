import InvestorPageClient from "./InvestorPageClient";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
    const { locale } = await props.params;
    const t = await getTranslations({ locale, namespace: "Work" });
    
    return {
        title: `${t("projects.p5.title")} | Portfolio`,
        description: t("projects.p5.challenge"),
    };
}

export default function InvestorLandingPage() {
    return (
        <main>
            <InvestorPageClient />
        </main>
    );
}
