import { useParamsHook } from "@/hooks/useParamsHook";
import type { IGenre } from "@/types";
import React, { type FC } from "react";

interface Props {
  data: undefined | IGenre[];
}

const Genre: FC<Props> = ({ data }) => {
  const { setParam, getParam, removeParam } = useParamsHook();
  const genre = getParam("genre");

  const handleGenre = (id: number) => {
    if (genre === id.toString()) {
      removeParam("genre");
    } else {
      setParam("genre", id.toString());
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex overflow-x-auto gap-3 py-4 scrollbar-thin scrollbar-thumb-gray-300">
        {data?.map((item: IGenre) => {
          const isActive = item.id.toString() === genre;
          return (
            <button
              key={item.id}
              onClick={() => handleGenre(item.id)}
              className={`text-sm whitespace-nowrap px-4 py-2 rounded-full border font-medium transition
                ${
                  isActive
                    ? "bg-red-600 text-white border-red-600 shadow"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-100 border-gray-300"
                }`}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Genre);
