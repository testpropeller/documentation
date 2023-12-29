import Layout from '@theme/Layout';

import {ReactElement} from "react";
import HomepageHeader from "@site/src/components/HomepageHeader";

export default function Home(): ReactElement {
    return (
        <Layout
            title={`Integration tests made fast and reliable`}
            description="Give each test its own prod-like environment in milliseconds.">
            <HomepageHeader/>
            <main>
                <IntegratesWithStack/>
                <Pricing/>
            </main>
        </Layout>
    );
}

function IntegratesWithStack(): ReactElement {
    return (
        <div>
            <h2>Integrates with your stack</h2>
            <button>Read the docs</button>
        </div>
    );
}

function Pricing(): ReactElement {
    return (
        <div>
            <h2>Simple and transparent pricing</h2>
        </div>
    );
}