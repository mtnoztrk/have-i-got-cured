import * as React from 'react';
import links from './links.json'

interface IResearchItem {
    href: string
    title: string
}

export const ResearchItem: React.FC<IResearchItem> = (props) => {
    return (
        <li className="mx-3">
            <a className="text-muted" href={props.href}>{props.title}</a>
        </li>
    );
}

export const ResearchMenu: React.FC = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
            <ul>
                <span className="font-weight-light text-muted">Meanwhile you can check below links..</span>
                {links.map((link, i) => <ResearchItem key={i} title={link.title} href={link.target} />)}
            </ul>
        </div>
    );
}