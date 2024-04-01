import { AuthButton, useRestActor } from "@bundly/ares-react";

export default function Header() {

    return (
        <header>
            <div>
                <h1>IC Connect</h1>
            </div>
            <div>
                <AuthButton />
            </div>
        </header>
    );
}
