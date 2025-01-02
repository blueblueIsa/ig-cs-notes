import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
// import { ErrorBoundary } from '../components/layout/ErrorBoundary';
// import { LoadingSpinner } from '../components/atoms/LoadingSpinner';

import { Welcome } from '../components/layout/Welcome';
import { DataRepresentation } from '../pages/theory/data-representation';
import { DataTransmission } from '../pages/theory/data-transmission';
import { Hardware } from '../pages/theory/hardware';
import { Selection } from '../pages/programming/selection';
import { Operations } from '../pages/programming/operations';
import { ControlStructures } from '../pages/programming/control-structures';
import { BasicMethods } from '../pages/programming/basic-methods';

// const TheoryLayout = React.lazy(() => import('../components/layout/Welcome'));
// const ProgrammingLayout = React.lazy(() => import('../components/layout/ProgrammingLayout'));

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />
        <Route path="theory/data-representation" index element={<DataRepresentation />} />
        <Route path="theory/data-transmission" index element={<DataTransmission />} />
        <Route path="theory/hardware" index element={<Hardware />} />
        <Route path="programming/selection" index element={<Selection />} />
        <Route path="programming/operations" index element={<Operations />} />
        <Route path="programming/control-structures" index element={<ControlStructures />} />
        <Route path="programming/basic-methods" index element={<BasicMethods />} />
      </Route>

      {/* <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Route> */}
    </Routes>
  );
}