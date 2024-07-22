import { useEffect, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createRoom } from "../api/dashboard";
import { CreateRoomReq } from "../api/types";

type CreateRoomModalProps = {
  visible: boolean;
  onClose: () => void;
};

export default function CreateRoomModal({
  visible,
  onClose,
}: CreateRoomModalProps) {
  const createRoomModalRef = useRef<HTMLDialogElement>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationFn: (room: CreateRoomReq) => createRoom(room),
  });

  useEffect(() => {
    visible
      ? createRoomModalRef.current?.showModal()
      : createRoomModalRef.current?.close();
  }, [visible]);

  const handleCloseModal = () => {
    setDescription("");
    setTitle("");
    onClose();
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutate({ title, description });
  };
  return (
    <>
      <dialog
        id="my_modal_1"
        className="modal"
        ref={createRoomModalRef}
        onCancel={onClose}
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create Room</h3>

          <div className="modal-action">
            <form
              className="flex justify-between  flex-col gap-6 w-full"
              onSubmit={handleSubmit}
              method="dialog"
            >
              <label className="input input-bordered gap-2 flex">
                <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </label>
              <label>
                <textarea
                  className=" w-full textarea textarea-bordered gap-2 flex text-lg"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </label>
              {isSuccess ? <p>room created successfully</p> : ""}
              {error ? <p>{error.name}</p> : ""}
              <div className="modal-action flex justify-evenly gap-3">
                <button className="btn btn-primary grow">
                  {isPending ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    ""
                  )}
                  Create
                </button>
                <button className="btn grow" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
