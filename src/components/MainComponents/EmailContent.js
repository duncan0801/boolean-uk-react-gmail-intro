
import EmailContentActions from './EmailContentComponents/EmailContentActions'
import EmailContentBody from './EmailContentComponents/EmailContentBody'
import EmailContentHeader from './EmailContentComponents/EmailContentHeader'
import EmailContentTitle from './EmailContentComponents/EmailContentTitle'

function EmailContent() {
    return (
        <article className="email-content">
            <EmailContentTitle/>

            <EmailContentHeader/>
            
            <EmailContentBody/>
            
            <EmailContentActions/>
        </article>
    )
}
export default EmailContent