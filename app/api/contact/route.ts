import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, projectType, message } = body;

        // ดึงค่าตัวแปรจาก Environment
        const NOTION_TOKEN = process.env.NOTION_TOKEN;
        const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

        if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
            console.error("Missing Notion credentials in Environment Variables.");
            return NextResponse.json({ error: "Server Configuration Error" }, { status: 500 });
        }

        // ยิงข้อมูลไปที่ API ของ Notion เพื่อสร้าง Row ใหม่
        const response = await fetch('https://api.notion.com/v1/pages', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${NOTION_TOKEN}`,
                'Content-Type': 'application/json',
                'Notion-Version': '2022-06-28'
            },
            body: JSON.stringify({
                parent: { database_id: NOTION_DATABASE_ID },
                properties: {
                    // ตรงกับ Column "Name" ที่เป็นอักษร Aa (Title)
                    Name: {
                        title: [
                            {
                                text: {
                                    content: name
                                }
                            }
                        ]
                    },
                    // ตรงกับ Column "Email"
                    Email: {
                        email: email
                    },
                    // ตรงกับ Column "Type" (Text) - ใช้ text แทน select เพื่อความชัวร์ไม่ให้เกิดเว็บพังถ้าตั้งค่าผิด
                    Type: {
                        rich_text: [
                            {
                                text: {
                                    content: projectType || "Not Specified"
                                }
                            }
                        ]
                    },
                    // ตรงกับ Column "Message"
                    Message: {
                        rich_text: [
                            {
                                text: {
                                    content: message
                                }
                            }
                        ]
                    }
                }
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Notion API Error: ", errorData);
            return NextResponse.json({ error: "Failed to save to Notion" }, { status: 502 });
        }

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error("Internal API Error: ", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
