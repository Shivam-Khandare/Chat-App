import {MessageSquare} from 'lucide-react'

const NoChatSelected = () => {
  return (
    <div className='justify-center items-center flex flex-1 flex-col w-full p-16 bg-base-100/50'>
        <div className='max-w-md text-center space-y-6'>
            <div className='flex justify-center gap-4 mb-4'>
                <div className='relative'>
                    <div className='size-16 flex rounded-2xl justify-center items-center bg-base-content/10 animate-bounce'>
                        <MessageSquare className='size-8 text-primary'/>
                    </div>
                </div>
            </div>

            <h2 className='text-2xl font-bold'>Welcome to Chatty!</h2>
            <p className='text-base-content/60'>Select a conversation from the sidebar to start chatting</p>
        </div>
    </div>
  )
}

export default NoChatSelected