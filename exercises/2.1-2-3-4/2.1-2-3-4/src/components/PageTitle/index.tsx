import "./PageTitle.css";

export interface PageTitleProps { 
    title: string;
}

export const PageTitle= ( {title} : PageTitleProps) => { 
    return ( 
        <h2>
            {title}
        </h2>
    );
}
