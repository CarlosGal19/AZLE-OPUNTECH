import { useRestActor } from "@bundly/ares-react";

export function useBackend() {
    return useRestActor("backend");
}

export async function testFunction() {
    const backend = useBackend();
    try {
        const response = await backend.post("/test", { hello: "world" }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        console.log({ response });
    } catch (error) {
        console.error({ error });
    }
}

export async function whoAmI(backend: any) { // Pasa el backend como argumento
    try {
        const backend = useBackend();
        const response = await backend.get("/whoami");

        const userKey = response.data.__principal__;
        if (userKey.length < 10) {
            return false;
        }
        return true;
    } catch (error) {
        console.error({ error });
    }
}
