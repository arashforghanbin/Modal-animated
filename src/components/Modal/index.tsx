import React, { Dispatch, FC, SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./modal.module.scss";

interface IModal {
  modalClicked: boolean;
  setModalClicked: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<IModal> = ({ modalClicked, setModalClicked }) => {
  const handleOverlayClick = () => {
    setModalClicked(false);
  };
  return (
    <AnimatePresence>
      {modalClicked && (
        <section className={styles.modalContainer}>
          <motion.div
            onClick={() => handleOverlayClick()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.modalContainer__overlay}
          ></motion.div>
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: -10 }}
            exit={{ y: 200 }}
            className={styles.modalContainer__modal}
          >
            <h1>Hello</h1>
            <p>This is a modal</p>
          </motion.div>
        </section>
      )}
    </AnimatePresence>
  );
};

export default Modal;
