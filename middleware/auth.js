export default defineNuxtRouteMiddleware( async (to, _from) => {
    useDirectusTokenRefresh(to.path);
});