import { CSSProperties, ReactNode } from "react"
import styles from './Section.module.css';

type SectionProps = {
    children: ReactNode;
    id?: string;
    style?: CSSProperties;
};

export function Section ({ children, id, style }: SectionProps) {
    return (
        <section className={styles.section} id={id} style={style}>
            {children}
        </section>
    )
}