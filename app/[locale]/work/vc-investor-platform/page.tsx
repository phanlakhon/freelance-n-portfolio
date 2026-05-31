import InvestorPageClient from "./InvestorPageClient";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
    const { locale } = await props.params;

    return {
        title:
            locale === "th"
                ? "VC Investor Platform Case Study | งานพัฒนา Frontend"
                : "VC Investor Platform Case Study | Frontend Development",
        description:
            locale === "th"
                ? "ตัวอย่างงานพัฒนา investor relations platform และ interactive frontend experience สำหรับนำเสนอข้อมูลธุรกิจอย่างมืออาชีพ"
                : "A frontend development case study for an investor relations platform with interactive storytelling, metrics, and a polished digital presentation.",
    };
}

export default function InvestorLandingPage() {
    return (
        <main>
            <InvestorPageClient />
        </main>
    );
}
