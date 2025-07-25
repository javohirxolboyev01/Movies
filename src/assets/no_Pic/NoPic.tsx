import React from "react";

const NoPic = () => {
  return (
    <div>
      <img
        width={100}
        height={200}
        src="https://i.ytimg.com/vi/zQVUyGLm47Y/maxresdefault.jpg"
        alt=""
      />
    </div>
  );
};

export default React.memo(NoPic);
