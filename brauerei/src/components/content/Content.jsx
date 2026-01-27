import { Routes, Route, Navigate } from 'react-router-dom';

import Biersortiment from './gast/Biersortiment';
import Auftraggeben from './produktion/brauermeister/Auftraggeben';

function Content() {
      return (
        <>
          <Routes>
            <Route path="/biersortiment" element={< Biersortiment />} />
            <Route path="/neuerauftrag" element={< Auftraggeben/>} />
            <Route path="/" element={<Navigate to="/biersortiment" />} />
          </Routes>
        </>
      );
    }
export default Content