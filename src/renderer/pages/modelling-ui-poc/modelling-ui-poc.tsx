import { Link } from 'react-router-dom';
import { ROUTES } from 'renderer/constants';

const ModellingUiPoc = () => {
  return (
    <div className="p-20 min-h-screen">
      <h1 className="font-bold text-blue-500 text-6xl mb-6">Three.js PoCs</h1>

      <ul className="flex flex-col gap-4">
        <Link
          to={ROUTES.MODELLING_UI_POC.SIMPLE_CUBE}
          className="font-bold text-xl hover:text-blue-500 transition-all"
        >
          Simple Cube
        </Link>

        <Link
          to={ROUTES.MODELLING_UI_POC.DRAWING_LINES}
          className="font-bold text-xl hover:text-blue-500 transition-all"
        >
          Drawing Lines
        </Link>

        <Link
          to={ROUTES.MODELLING_UI_POC.PROCEDURAL_TEXT}
          className="font-bold text-xl hover:text-blue-500 transition-all"
        >
          Procedural Text
        </Link>

        <Link
          to={ROUTES.MODELLING_UI_POC.UCS}
          className="font-bold text-xl hover:text-blue-500 transition-all"
        >
          UCS
        </Link>

        <Link
          to={ROUTES.MODELLING_UI_POC.GRID_SYSTEM}
          className="font-bold text-xl hover:text-blue-500 transition-all"
        >
          Grid System
        </Link>
        <Link
          to={ROUTES.MODELLING_UI_POC.COLUMNS_2D}
          className="font-bold text-xl hover:text-blue-500 transition-all"
        >
          2D Columns
        </Link>
        <Link
          to={ROUTES.MODELLING_UI_POC.COLUMN_SYSTEM}
          className="font-bold text-xl hover:text-blue-500 transition-all"
        >
          Columns System
        </Link>
        <Link
          to={ROUTES.MODELLING_UI_POC.COLUMN_GROUP}
          className="font-bold text-xl hover:text-blue-500 transition-all"
        >
          Columns Group
        </Link>
      </ul>
    </div>
  );
};

export default ModellingUiPoc;
