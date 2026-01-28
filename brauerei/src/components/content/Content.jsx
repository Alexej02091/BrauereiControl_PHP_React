import { Routes, Route, Navigate } from 'react-router-dom';

import Biersortiment from './gast/Biersortiment';
import Auftraggeben from './produktion/brauermeister/Auftraggeben';
import Bierlager from './produktion/brauermeister/Bierlager';
import AktuelleAuftraege from './produktion/brauermeister/AktuelleAuftraege';

function Content() {
      return (
        <>
          <Routes>
            <Route path="/biersortiment" element={< Biersortiment />} />
            <Route path="/neuerauftrag" element={< Auftraggeben/>} />
            <Route path="/bierlager" element={<Bierlager/>} />
            <Route path="/brauenplan" element={<AktuelleAuftraege/>} />
            <Route path="/" element={<Navigate to="/biersortiment" />} />
          </Routes>
        </>
      );
    }
export default Content