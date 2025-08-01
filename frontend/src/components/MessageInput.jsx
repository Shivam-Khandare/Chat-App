import React, { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, ImagePlusIcon, Send, X } from "lucide-react";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();

  const handelImageChange = (e) => {
    const file = e.target.files[0];
    if(!file.type.startsWith("image/")){
      toast.error("Please select an image file")
      return
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result)
    }
    reader.readAsDataURL(file)
  };

  const removeImage = () => {
    setImagePreview(null);
    if(fileInputRef.current) fileInputRef.current.value =""
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if(!text.trim() && !imagePreview) return;

    try {
      await sendMessage({ 
        text: text.trim(),
        image: imagePreview,
      })
      setText("")
      setImagePreview(null)
      if(fileInputRef.current) fileInputRef.current.value="";
    } catch (error) {
      console.error("Failed to send message:", error)
    }
  };

  return (
    <div className="p-4 w-full">
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img src={imagePreview} className="size-20 object-cover rounded-lg border border-zinc-700" alt="Preview" />
            <button
              onClick={removeImage}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300 flex items-center justify-center"
              type="button"
            >
              <X className="size-3" />
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="flex items-center gap-2">
        <div className="flex-1 items-center flex gap-2">
          <input
            type="text"
            className="w-full input input-bordered rounded-lg input-sm sm:input-md"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input type="file" className="hidden" accept="image/*" ref={fileInputRef} onChange={handelImageChange}/>
          <button type="button" onClick={() => fileInputRef.current?.click()} className={`sm:flex btn btn-sm btn-circle ${imagePreview ? "text-emerald-500" : "text-zinc-400" }`}><ImagePlusIcon size={18}/></button>
        </div>
        <button type="submit" disabled={!text.trim() && !imagePreview} className="btn btn-sm btn-circle"><Send size={20}/></button>
      </form>
    </div>
  );
};

export default MessageInput;
