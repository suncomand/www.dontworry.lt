import { create } from 'zustand';

const useStore = create((set) => ({
    username: '',
    password1: '',
    password2: '',
    posts: [],
    allUsers: [],
    messages: [],
    activeUserId: null,

    setUserData: (username, profileImageUrl) =>
        set((state) => ({
            allUsers: [
                ...state.allUsers,
                { id: Date.now(), username, profileImageUrl, messages: [] }
            ]
        })),
    setRegistrationData: (username, password1, password2) =>
        set({ username, password1, password2 }),

    addMessage: (sender, receiver, message) =>
        set((state) => ({
            messages: [
                ...state.messages,
                { sender, receiver, message, timestamp: Date.now() }
            ]
        })),

    addPost: (description, imageUrl) => set((state) => ({
        posts: [
            ...state.posts,
            {
                id: Date.now(),
                description,
                imageUrl,
                username: state.username
            }
        ]
    })),

    deletePost: (postId) => set((state) => ({
        posts: state.posts.filter((post) => post.id !== postId)
    })),

    sendMessage: (userId, message) => {
        set((state) => {
            const users = state.allUsers.map(user =>
                user.id === userId
                    ? { ...user, messages: [...user.messages, { text: message, sender: 'You' }] }
                    : user
            );
            return { allUsers: users }
        })
    },
    setActiveUser: (userId) => {
        set({ activeUserId: userId })
    }
}))

export default useStore;

