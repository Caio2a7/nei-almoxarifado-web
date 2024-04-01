import { useRouter } from 'vue-router';

export const useRoutes = () => {
    const $router = useRouter();
    const routes:string[] = [];
    
    $router.options.routes.forEach(route => {
      routes.push(route.path);
    });
    
  return routes;
};
