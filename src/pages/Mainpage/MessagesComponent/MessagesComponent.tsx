// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import ModalReplyMessage from "../../../components/ModalReplyMessage";
// import Typography from "../../../components/Typography";
// import { MESSAGES_PATH } from "../../../config/Paths";
// import { AppDispatch, RootState } from "../../../redux/ReduxStore";
// import { getAllMessages, getAllMessagesPartner } from "../../../redux/slices/MessageSlice";

// interface Message {
//     id: string;
//     sender_id: string;
//     message: string;
//     offer_id?: string;
// }

// const MessagesComponent = () => {
//     const dispatch = useDispatch<AppDispatch>();
//     const user_role = useSelector((state: RootState) => state.user.user?.role);
//     const messages = useSelector((state: RootState) => state.message.messages) as Message[];
//     const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     console.log(messages);
//     useEffect(() => {
//         if (user_role === "partner") {
//             dispatch(getAllMessagesPartner());
//         } else {
//             dispatch(getAllMessages());
//         }
//     }, [dispatch, user_role]);

//     const handleReplyToMessage = (message: Message) => {
//         setSelectedMessage(message);
//         setIsModalOpen(true);
//     };

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//     };

//     return (
//         <div id={MESSAGES_PATH} className="container mx-auto m-4 md:mt-10 mb-10">
//             <div className="flex flex-row justify-between items-center">
//                 <Typography size="large">Messages</Typography>
//             </div>

//             <div className="mt-6">
//                 {messages && messages.length > 0 ? (
//                     <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
//                         <thead className="bg-gray-100">
//                             <tr>
//                                 <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-600">Sender</th>
//                                 <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-600">Message</th>
//                                 <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-600">Offer ID</th>
//                                 {user_role === "partner" && (
//                                     <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-600">Action</th>
//                                 )}
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {messages.map((message) => (
//                                 <tr
//                                     key={message.id}
//                                     className="hover:bg-gray-50"
//                                     onClick={() => setSelectedMessage(message)}
//                                 >
//                                     <td className="py-3 px-4 border-b text-sm text-gray-700">{message.sender_id}</td>
//                                     <td className="py-3 px-4 border-b text-sm text-gray-700">{message.message}</td>
//                                     <td className="py-3 px-4 border-b text-sm text-gray-700">{message.offer_id || "N/A"}</td>
//                                     {user_role === "partner" && (
//                                         <td className="py-3 px-4 border-b text-sm text-gray-700">
//                                             <button
//                                                 className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
//                                                 onClick={(e) => {
//                                                     e.stopPropagation();
//                                                     handleReplyToMessage(message);
//                                                 }}
//                                             >
//                                                 Odgovori
//                                             </button>
//                                         </td>
//                                     )}
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 ) : (
//                     <p className="text-gray-500 mt-4">No messages found.</p>
//                 )}
//             </div>

//             {isModalOpen && selectedMessage && (
//                 <ModalReplyMessage
//                     onClose={handleCloseModal}
//                     offer_id={selectedMessage.offer_id}
//                     user_id={selectedMessage.sender_id}
//                     parent_message_id={selectedMessage.id}
//                 />
//             )}
//         </div>
//     );
// };

// export default MessagesComponent;



import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalReplyMessage from "../../../components/ModalReplyMessage";
import Typography from "../../../components/Typography";
import { MESSAGES_PATH_SCROLL } from "../../../config/PathForScroll";
import { AppDispatch, RootState } from "../../../redux/ReduxStore";
import { getAllMessages, getAllMessagesPartner } from "../../../redux/slices/MessageSlice";

type Message = {
    sender_id: string;
    receiver_id: string;
    parent_message_id: string | null;
    created_at: string;
    updated_at: string;
    offer_id: string;
    replies: Reply[];
    id: string;
    user_id: string;
    message: string;
    sentAt: string;
};

type Reply = {
    sender_id: string | undefined;
    receiver_id: string;
    parent_message_id: string | null;
    created_at: string;
    updated_at: string;
    offer_id: string;
    replies: Reply[];
    id: string;
    user_id: string;
    message: string;
    sentAt: boolean;
};

type IGetAllMessageProps = {
    sender_id: string;
    receiver_id: string;
    parent_message_id: string | null;
    created_at: string;
    updated_at: string;
    offer_id: string;
    replies: Reply[];
    id: string;
    user_id: string;
    message: string;
    sentAt: boolean; // sentAt is a boolean in IGetAllMessageProps
};


const MessagesComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const user_role = useSelector((state: RootState) => state.user.user?.role);
    // const messages = useSelector((state: RootState) => state.message.messages) as Message[];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

    useEffect(() => {
        if (user_role === "partner") {
            dispatch(getAllMessagesPartner());
        } else {
            dispatch(getAllMessages());
        }
    }, [dispatch, user_role]);

    const messages = useSelector((state: RootState) =>
        (state.message.messages as IGetAllMessageProps[]).map((msg) => ({
            ...msg,
            sender_id: msg.sender_id ? String(msg.sender_id) : "0", // Convert to string
            receiver_id: msg.receiver_id,
            parent_message_id: msg.parent_message_id ?? null,
            created_at: msg.created_at ?? '',
            updated_at: msg.updated_at ?? '',
            offer_id: msg.offer_id,
            replies: msg.replies ? msg.replies.map((reply) => ({
                ...reply,
                sender_id: reply.sender_id ? String(reply.sender_id) : "0", // Convert sender_id to string
                receiver_id: reply.receiver_id,
                parent_message_id: reply.parent_message_id ?? null,
                created_at: reply.created_at ?? '',
                updated_at: reply.updated_at ?? '',
                offer_id: reply.offer_id,
            })) : [],
            id: msg.id,
            user_id: msg.user_id,
            message: msg.message,
            sentAt: msg.sentAt ? "true" : "false", // Convert sentAt to string ('true'/'false')
        }))
    );

    // const transformedMessages: Message[] = messages.map((msg) => ({
    //     ...msg,
    //     sender_id: msg.sender_id ? String(msg.sender_id) : "0",
    //     receiver_id: msg.receiver_id,
    //     parent_message_id: msg.parent_message_id ?? null,
    //     created_at: msg.created_at ?? '',
    //     updated_at: msg.updated_at ?? '',
    //     offer_id: msg.offer_id,
    //     replies: msg.replies
    //         ? msg.replies.map((reply) => ({
    //             ...reply,
    //             sender_id: reply.sender_id ? String(reply.sender_id) : "0",
    //             receiver_id: reply.receiver_id,
    //             parent_message_id: reply.parent_message_id ?? null,
    //             created_at: reply.created_at ?? '',
    //             updated_at: reply.updated_at ?? '',
    //             offer_id: reply.offer_id,
    //             replies: reply.replies
    //                 ? reply.replies.map((nestedReply) => ({
    //                     ...nestedReply,
    //                     sender_id: nestedReply.sender_id ? String(nestedReply.sender_id) : "0",
    //                     receiver_id: nestedReply.receiver_id,
    //                     parent_message_id: nestedReply.parent_message_id ?? null,
    //                     created_at: nestedReply.created_at ?? '',
    //                     updated_at: nestedReply.updated_at ?? '',
    //                     offer_id: nestedReply.offer_id,
    //                 }))
    //                 : []
    //         }))
    //         : [],
    //     id: msg.id,
    //     user_id: msg.user_id,
    //     message: msg.message,
    //     sentAt: String(msg.sentAt),
    // }));

    const handleReplyToMessage = (message: Message, e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedMessage(message);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div id={MESSAGES_PATH_SCROLL} className="container mx-auto m-4 md:mt-10 mb-10">
            <div className="flex flex-row justify-between items-center">
                <Typography size="large">Messages</Typography>
            </div>

            <div className="mt-6">
                {messages && messages.length > 0 ? (
                    <table className="min-w-full rounded-2xl bg-slate-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-600">Sender</th>
                                <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-600">Message</th>
                                <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-600">Offer ID</th>
                                {user_role === "partner" && (
                                    <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-600">Action</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((message) => (
                                <React.Fragment key={message.id}>
                                    <tr
                                        className="hover:bg-gray-50"
                                        onClick={() => setSelectedMessage(message)}
                                    >
                                        <td className="py-3 px-4 border-b text-sm text-gray-700">{message.sender_id}</td>
                                        <td className="py-3 px-4 border-b text-sm text-gray-700">{message.message}</td>
                                        <td className="py-3 px-4 border-b text-sm text-gray-700">{message.offer_id || "N/A"}</td>
                                        {user_role === "partner" && (
                                            <td className="py-3 px-4 border-b text-sm text-gray-700">
                                                <button
                                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                                                    onClick={(e) => handleReplyToMessage(message, e)}
                                                >
                                                    Reply
                                                </button>
                                            </td>
                                        )}
                                    </tr>

                                    {message.replies && message.replies.length > 0 && (
                                        <tr className="bg-gray-50">
                                            <td colSpan={4} className="py-2 px-4">
                                                <div className="text-sm text-gray-600">
                                                    <strong>Replies:</strong>
                                                    <div className="mt-2">
                                                        {message.replies.map((reply) => (
                                                            <div key={reply.id} className="border-b py-2">
                                                                <div className="text-sm text-gray-600">
                                                                    <strong>Sender:</strong> {reply.sender_id}
                                                                </div>
                                                                <div className="text-sm text-gray-800">{reply.message}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-500 mt-4">No messages found.</p>
                )}
            </div>

            {isModalOpen && selectedMessage && (
                <ModalReplyMessage
                    onClose={handleCloseModal}
                    offer_id={selectedMessage.offer_id}
                    user_id={selectedMessage.sender_id}
                    parent_message_id={selectedMessage.id}
                />
            )}
        </div>
    );
};

export default MessagesComponent;
