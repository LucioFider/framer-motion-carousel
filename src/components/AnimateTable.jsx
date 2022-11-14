import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useIsPresent } from "framer-motion";

let x = 3;

const AnimateTable = () => {
  const [items, setItems] = useState([1, 2, 3]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    window.toggle = () => setToggle((toggle) => !toggle);
  }, []);

  function addItem() {
    x++;
    setItems((items) => [...items, x]);
  }
  function removeItem(item) {
    setItems((items) => items.filter((i) => i !== item));
  }

  return (
    <div className="p-20 max-w-6xl mx-auto">
      <div className="text-right">
        <button onClick={addItem} className="border rounded px-2 py-1">
          Add
        </button>
      </div>

      <table cellPadding={0} className=" mt-3 border w-full p-10 ">
        <thead>
          <tr>
            <th>Col 1</th>
            <th>Col 2</th>
            <th>Col 3</th>
          </tr>
        </thead>
        <tbody className="relative">
          <AnimatePresence>
            {items.map((item) => (
              <TR key={item} item={item} removeItem={removeItem} />
            ))}
          </AnimatePresence>
        </tbody>
      </table>

      {/* <ul
        // layout
        // transition={{ layout: { duration: 2 } }}
        className="mt-8 border p-8 rounded-md overflow-hidden"
      >
        {items.map((item) => (
          <AnimatePresence initial={false}>
            <motion.li
              //   layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                opacity: { duration: 0.3 },
                height: { duration: 0.4 },
              }}
              key={item}
            >
              <div className="border-b flex  items-center justify-between py-2">
                <span>Item {item}</span>
                <button
                  onClick={() => removeItem(item)}
                  className="border rounded w-8 h-8"
                >
                  &times;
                </button>
              </div>
            </motion.li>
          </AnimatePresence>
        ))}
      </ul> */}
      {/* <div className="mt-8">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          fugit omnis similique reiciendis fuga blanditiis culpa, laborum
          dolorem. Fugiat, vel animi porro pariatur expedita mollitia. Sed quae
          facere officia labore.
        </p>
      </div> */}
    </div>
  );
};

export default AnimateTable;

function TR({ item, removeItem }) {
  let isPresent = useIsPresent();
  return (
    <motion.tr
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: { duration: 0.2 } }}
      style={{
        position: isPresent ? "relative" : "absolute",
        display: isPresent ? "table-row" : "flex",
        alignItems: isPresent ? "" : "center",
      }}
      className="w-full"
    >
      <td className="w-1/3">1: item {item}</td>
      <td className="w-1/3">
        2: item {item === 2 ? "Lorem ipsum dolar" : item}
      </td>
      <td className="w-1/3 text-center">
        <button
          onClick={() => removeItem(item)}
          className="w-8 h-8 border rounded"
        >
          &times;
        </button>
      </td>
    </motion.tr>
  );
}
