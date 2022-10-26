
const getAppsByTeam = (teamId: string) => {
    let api = '/api/appointments';
    let mak = api.concat('/' + teamId);
    return fetch(mak).then(res => res.json());
}


const add = (e: any, buildBody: Function) => {
    fetch('/api/appointments', {
        "method": "POST",
        "headers": { "Content-Type": "application/json" },
        "body": JSON.stringify(buildBody())
    }).then(res => res.json()).then(response => console.log(response));
}
export const actions = {
    getAppsByTeam,
    add
}