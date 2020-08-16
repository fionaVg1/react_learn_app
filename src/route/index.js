const xRoute = pathPre=>r=>r.keys().map((ke)=>{
    const path = key.slice(2,key.length-10);
    const completePath = `${pathPre}/${path}`;
    return (
        <Route path={completePath} key={completePath} component={r(key).default}/>
    )
});
const reg = /^\.\/[^/]+\/index.jsx/;
const m = xRoute('/m')(require.context('./views/m/',true,reg));
const m2 = xRoute('/m2')(require.context('./views/m2/',true,reg));
const m3 = xRoute('/m3')(require.context('./views/m3/',true,reg));
const MainSwitch = ()=>(
    <Switch>
        {
            [...m,...m2,...m3,
                <Route key="redirect" render={()=><Redirect to="/m/discover"/>}/>
            ]
        }
    </Switch>
)