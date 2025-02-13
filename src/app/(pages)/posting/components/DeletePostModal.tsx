import React, { useEffect } from "react";
import { Modal, initTWE } from "tw-elements";
import Loader from "@/app/shared/components/Loader";
import useDeletePost from "../hooks/useDeletePost";
initTWE({ Modal });

const DeletePostModal = ({ id }: {id: string}) => {
  const { deletePost, loading } = useDeletePost();

  useEffect(() => {
    const init = async () => {
      const { Modal, Ripple, initTWE, } = await import("tw-elements");
      initTWE({ Modal, Ripple });
    };
    init();
  }, []);


  const handleDelete = async () => {
    await deletePost(id); 

    // const modalElement = document.getElementById("exampleModal");
    // if (modalElement) {
      // const modalInstance = Modal.getInstance(modalElement);
    //   if (modalInstance) {
    //     modalInstance.hide();
    //   } else {
    //     console.error("Modal instance not found");
    //   }
    // }
  };


  return (
    <>
    <button 
      type="button"
      data-twe-toggle="modal"
      data-twe-target="#exampleModal"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      className="rounded 2xl:p-2 xl:p-2 p-1 border border-red-500 text-white bg-red-500 2xl:w-[100px] xl:w-[100px] w-full"
    >
      Delete
    </button> 

    <div
      data-twe-modal-init
      className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
        <div
          data-twe-modal-dialog-ref
      className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
      <div
      className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark">
      <div
        className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 p-4 dark:border-white/10">
        <h5
          className="text-xl font-medium leading-normal text-surface dark:text-white"
          id="exampleModalLabel">
          Confirm Delete
        </h5>
        <button
          type="button"
          className="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
          data-twe-modal-dismiss
          aria-label="Close">
          <span className="[&>svg]:h-6 [&>svg]:w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </button>
      </div>

      <div className="relative flex-auto p-4" data-twe-modal-body-ref>
        Are you sure you want to delete this post?
      </div>

      <div
        className="flex gap-[5px] flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 p-4 dark:border-white/10">
        <button
          type="button"
          className="font-bold inline-block rounded bg-gray-300 px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-slate-700"
          data-twe-modal-dismiss
          data-twe-ripple-init
          data-twe-ripple-color="light">
          Close
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="ms-1 inline-block rounded bg-red-500 text-white px-6 pb-2 pt-2.5 text-xs font-medium leading-normal"
          data-twe-ripple-init
          disabled={loading}
          data-twe-ripple-color="light">
           {loading? <Loader /> : 'Delete'}
        </button>
      </div>
    </div>
  </div>
</div>
</>
  );
};

export default DeletePostModal;