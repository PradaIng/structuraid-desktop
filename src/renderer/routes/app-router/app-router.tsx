import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from 'renderer/constants';
import { Home, ModellingUiPoc } from 'renderer/pages';
import Header from 'renderer/components/common/header/header';
import {
  SimpleCube,
  DrawingLines,
  ProceduralText,
  GridSystem,
  ColumnSystem,
  ColumnGroup,
  Ucs,
  Columns2D,
} from 'renderer/pages/modelling-ui-poc';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={ROUTES.ROOT} element={<Home />} />
        <Route
          path={ROUTES.MODELLING_UI_POC.ROOT}
          element={<ModellingUiPoc />}
        />
        <Route
          path={ROUTES.MODELLING_UI_POC.SIMPLE_CUBE}
          element={<SimpleCube />}
        />
        <Route
          path={ROUTES.MODELLING_UI_POC.DRAWING_LINES}
          element={<DrawingLines />}
        />
        <Route
          path={ROUTES.MODELLING_UI_POC.PROCEDURAL_TEXT}
          element={<ProceduralText />}
        />
        <Route path={ROUTES.MODELLING_UI_POC.UCS} element={<Ucs />} />
        <Route
          path={ROUTES.MODELLING_UI_POC.GRID_SYSTEM}
          element={<GridSystem />}
        />
        <Route
          path={ROUTES.MODELLING_UI_POC.COLUMNS_2D}
          element={<Columns2D />}
        />
        <Route
          path={ROUTES.MODELLING_UI_POC.COLUMN_SYSTEM}
          element={<ColumnSystem />}
        />
        <Route
          path={ROUTES.MODELLING_UI_POC.COLUMN_GROUP}
          element={<ColumnGroup />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
