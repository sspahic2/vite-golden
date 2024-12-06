import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { AppDispatch, RootState } from '../../redux/ReduxStore';
import { sendMessage } from '../../redux/slices/MessageSlice';
import ButtonFull from '../ButtonFull';


interface IModalSendMessageProps {
    onClose(): void;
    offer_id?: string;
    user_id?: string;
}


const ModalSendMessage = (props: IModalSendMessageProps) => {
    const { onClose, offer_id, user_id } = props;
    const dispatch = useDispatch<AppDispatch>();
    const [message, setMessage] = useState<string>('');
    const maxCharacters = 250;
    const sender = useSelector((state: RootState) => state.user.user?.id);

    const handleSendMessageToPartner = () => {
        if (!sender || !user_id) {
            console.error("Sender or receiver ID is missing");
            return;
        }
        const data = {
            sender_id: sender,
            receiver_id: user_id,
            offer_id,
            message,
        };
        dispatch(sendMessage(data));
        onClose();
    };


    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
            onClick={onClose}
        >
            <ToastContainer />

            <div
                className="relative p-10 w-full max-w-xl max-h-full bg-white rounded-[30px] shadow"
                onClick={(e) => e.stopPropagation()}
            >
                <div className='my-4'>

                    <textarea
                        id="comment"
                        rows={8}
                        maxLength={maxCharacters}
                        className="cardShadow w-full p-4 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                        placeholder="Schreibe deine nachricthen"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <ButtonFull variant='primary' onClick={handleSendMessageToPartner} title='Senden' className='mt-10' />
                </div>
            </div>
        </div>
    );
};

export default ModalSendMessage;







