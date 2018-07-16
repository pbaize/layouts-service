let citrix = true;

export const mousePolling = 16;
export const isCitrix = () => citrix;
export const notCitrix = () => {
    citrix = false;
};