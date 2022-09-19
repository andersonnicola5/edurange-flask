/* Display one chat entry.
 */
import "./chat_entry.css"

class ChatEntry extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {message} = this.props;
        const fromSelf = message.fromSelf;
        // determine value of message div className
        const messageType = fromSelf ? 'fromSelf' : 'fromOther'; 
        
        return (
            <div id='chat_entry'>
                <div className={messageType}>
                    {message}
                </div>
            </div>
        );
    }
}

export default ChatEntry;



















/*
// in case passing props in render doesn't work for whatever reason

        this.state = {
            time_sent: null,
            from_self: null,
            messageType: '', 
            message_contents: '',
        };
        
    }
    
        componentDidMount() {
            
            this.setState ({
                time_sent: {timeSent},
                from_self: {fromSelf},
                message_type: {fromSelf} ? 'fromSelf' : 'fromOther', // determine value of message div className
                message_contents: {messageContents},
            });
        }

*/





