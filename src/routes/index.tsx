import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
// import { ErrorBoundary } from '../components/layout/ErrorBoundary';
// import { LoadingSpinner } from '../components/atoms/LoadingSpinner';

import { Welcome } from '../components/layout/Welcome';
import { DataRepresentation } from '../pages/theory/data-representation';
import { DataTransmission } from '../pages/theory/data-transmission';
import { Hardware } from '../pages/theory/hardware';
import { Selection } from '../pages/programming/selection';
import { Fundamentals } from '../pages/programming/fundamentals';
import { ControlStructures } from '../pages/programming/control-structures';
import { DSA } from '../pages/programming/dsa';

// const TheoryLayout = React.lazy(() => import('../components/layout/Welcome'));
// const ProgrammingLayout = React.lazy(() => import('../components/layout/ProgrammingLayout'));

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />

        {/* <Route path="theory" index element={<TheoryLayout />} /> */}
        <Route path="theory/data-representation" index element={<DataRepresentation />} />
        <Route path="theory/data-transmission" index element={<DataTransmission />} />
        <Route path="theory/hardware" index element={<Hardware />} />
        {/* <Route path="programming" index element={<ProgrammingLayout />} /> */}
        <Route path="programming/selection" index element={<Selection />} />
        <Route path="programming/fundamentals" index element={<Fundamentals />} />
        <Route path="programming/control-structures" index element={<ControlStructures />} />
        <Route path="programming/dsa" index element={<DSA />} />
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

// const routes = [
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: 'theory',
//         element: (
//           // <Suspense fallback={<LoadingSpinner />}>
//             <TheoryLayout />
//           //</Suspense>
//         ),
//         children: [
//           {
//             path: '/data-representation',
//             lazy: () => import('../pages/theory/data-representation'),
//           },
//           {
//             path: 'data-representation/*',
//             lazy: () => import('../pages/theory/data-representation'),
//           },
//           {
//             path: 'data-transmission/*',
//             lazy: () => import('../pages/theory/data-transmission'),
//           },
//           // {
//           //   path: 'hardware/*',
//           //   lazy: () => import('../pages/theory/hardware'),
//           // },
//         ],
//       },
//       {
//         path: 'programming',
//         element: (
//           <Suspense fallback={<LoadingSpinner />}>
//             <ProgrammingLayout />
//           </Suspense>
//         ),
//         children: [
//           // {
//           //   path: 'fundamentals/*',
//           //   lazy: () => import('@/pages/programming/fundamentals'),
//           // },
//           {
//             path: 'selection/*',
//             lazy: () => import('../pages/programming/selection'),
//           },
//           // {
//           //   path: 'control-structures/*',
//           //   lazy: () => import('@/pages/programming/control-structures'),
//           // },
//           // {
//           //   path: 'dsa/*',
//           //   lazy: () => import('@/pages/programming/dsa'),
//           // },
//         ],
//       },
//     ],
//   },
// ];

// export const router = createBrowserRouter(routes);
// export const router = createHashRouter(routes);