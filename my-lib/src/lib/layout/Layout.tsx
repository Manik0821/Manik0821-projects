import { Button } from '../Button/Button';
import './Layout.css'

type LayoutProps = {
    title : string;
    subtitle: string;
    children : React.ReactNode;
}

export const Layout : React.FC<LayoutProps> = ({title,subtitle,children}) => {
    return (
        <div className="page-layout">
            <div className="page-title">
                <div className="page-heading">{title}</div>
                {/* <div className="page-subheading">{subtitle}</div> */}
                <Button type="tertiary" value={subtitle} click={false} disabled={false} ></Button>

            </div>
            <div className="page-content">
                {children}
            </div>
        </div>
    )
}