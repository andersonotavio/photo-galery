import { Modal } from "@/components/Modal";
import { PhotoItem } from "@/components/PhotoItem";
import { photoList } from "@/data/photoList";
import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState(false);
  const [itemOfModal, setItemOfModal] = useState("");

  const openModal = (id: number) => {
    const photo = photoList.find((item) => item.id === id);
    if (photo) {
      setModal(true);
      setItemOfModal(photo.url);
    }
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <div className=" mx-3 pb-5">
        <h1 className="text-center font-bold text-3xl py-6 ">
          Fotos Intergalaticas
        </h1>
        <section className="container  max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  ">
          {photoList.map((item) => (
            <PhotoItem
              key={item.id}
              photo={item}
              onClick={() => {
                openModal(item.id);
              }}
            />
          ))}
        </section>
        {modal && <Modal image={itemOfModal} closeModal={closeModal} />}
      </div>
    </>
  );
}
