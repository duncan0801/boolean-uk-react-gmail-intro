import EmailToolbarButtons from "./EmailToolbarComponents/EmailToolbarButtons"
import EmailToolbarPagesButtons from "./EmailToolbarComponents/EmailToolbarPagesButtons"
import "../../styles/EmailToolbar.css"

function EmailToolbar() {
    return (
        <nav className="email-toolbar">
        
            <EmailToolbarButtons/>

            <div className="space"></div>
            
            <EmailToolbarPagesButtons/>

        </nav>
    )
}
export default EmailToolbar 