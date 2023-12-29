import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import styles from './styles.module.css';
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import {ReactElement} from "react";

export default function HomepageHeader(): ReactElement {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.tagline}
                </Heading>
                <p className="hero__subtitle">Leverage the power of VM snapshotting to quickly clone running containers.</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs">
                        Get started for free
                    </Link>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs">
                        Talk to sales
                    </Link>
                </div>
            </div>
        </header>
    );
}