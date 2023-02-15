import React from "react";
import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contatti" className="py-48">
      <motion.div
        className="flex justify-end w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-orange">CONTATTAMI</span> PER INIZIARE
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src="../assets/contact-image.jpeg" alt="contatti" />
        </motion.div>

        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/177d14971b850c5087dfdc19e23cd118"
            method="POST"
          >
            <input
              className="w-full bg-red font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="Nome"
              {...register("nome", {
                required: true,
                maxLenght: 100,
              })}
            />
            {errors.nome && (
              <p className="text-red mt-1">
                {errors.nome.type === "required" &&
                  "Questo campo è oblligatorio."}
                {errors.nome.type === "maxLenght" &&
                  "La lunghezza massima è di 100 cartatteri."}
              </p>
            )}

            <input
              className="w-full bg-red font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" &&
                  "Questo campo è oblligatorio."}
                {errors.email.type === "pattern" &&
                  "Indirizzo email non valido."}
              </p>
            )}

            <textarea
              className="w-full bg-red font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="Messaggio"
              rows="4"
              cols="50"
              {...register("messaggio", {
                required: true,
                maxLenght: 200,
              })}
            />
            {errors.messaggio && (
              <p className="text-red mt-1">
                {errors.messaggio.type === "required" &&
                  "Questo campo è oblligatorio."}
                {errors.messaggio.type === "maxLength" &&
                  "La lunghezza massima del messaggio è 200 caratteri"}
              </p>
            )}

            <button
              type="submit"
              className="p-5 bg-orange font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white
              transition duration-500"
            >
              Invia un messaggio
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
