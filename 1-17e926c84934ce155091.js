(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8/2X":function(e,l,a){"use strict";a.r(l);var n=a("q1tI"),t=a.n(n),i=a("R/WZ"),u=a("kCIJ"),d=[{locale:"en",messages:a("shV4")},{locale:"pt-br",messages:a("pRgV")}].map(e=>Object(u.createIntl)(e,Object(u.createIntlCache)())),r=a("7Cbv"),s=Object(i.a)(e=>({resumeSummary:{padding:"10px 0",borderBottom:"1px solid #ddd"},resumeBasics:{padding:"10px 0",borderBottom:"1px solid #ddd","& h2":{textTransform:"uppercase",margin:"0"}},address:{margin:"0",padding:"0",display:"flex",listStyle:"none","& li":{margin:"0 5px 0 0","&:after":{content:'","'},"&:last-child":{"&:after":{content:'""'}}}},"contact-info":{margin:"0",padding:"0",display:"flex",listStyle:"none","& li":{margin:"0 5px 0 0","&:after":{content:'" |"'},"&:last-child":{"&:after":{content:'""'}}}},"social-media":{margin:"0",padding:"0",display:"flex",listStyle:"none","& li":{margin:"0 5px 0 0","&:after":{content:'" |"'},"&:last-child":{"&:after":{content:'""'}}}},website:{}})),o=e=>{var{basics:{name:l,label:a,picture:i,email:d,phone:o,website:c,url:m,summary:v,location:{enabled:b,value:{address:p,postalCode:g,city:E,countryCode:f,region:y}},profiles:x}}=e,h=s(),k=Object(n.useContext)(u.IntlContext);return t.a.createElement(n.Fragment,null,t.a.createElement("div",{className:h.resumeBasics},(null==l?void 0:l.enabled)&&t.a.createElement("h2",null,null==l?void 0:l.value),(null==a?void 0:a.enabled)&&t.a.createElement("h3",null,null==a?void 0:a.value),b&&t.a.createElement("ul",{className:h.address},(null==p?void 0:p.enabled)&&t.a.createElement("li",{key:Object(r.a)()},null==p?void 0:p.value),(null==E?void 0:E.enabled)&&t.a.createElement("li",{key:Object(r.a)()},null==E?void 0:E.value),(null==y?void 0:y.enabled)&&t.a.createElement("li",{key:Object(r.a)()},null==y?void 0:y.value),(null==g?void 0:g.enabled)&&t.a.createElement("li",{key:Object(r.a)()},null==g?void 0:g.value),(null==f?void 0:f.enabled)&&t.a.createElement("li",{key:Object(r.a)()},null==f?void 0:f.value)),t.a.createElement("ul",{className:h["contact-info"]},(null==m?void 0:m.enabled)&&t.a.createElement("li",{key:Object(r.a)()},t.a.createElement("a",{className:h.url,href:null==m?void 0:m.value,target:"_blank"},null==m?void 0:m.value)),(null==c?void 0:c.enabled)&&t.a.createElement("li",{key:Object(r.a)()},t.a.createElement("a",{className:h.website,href:null==c?void 0:c.value,target:"_blank"},null==c?void 0:c.value)),(null==o?void 0:o.enabled)&&t.a.createElement("li",{key:Object(r.a)()},null==o?void 0:o.value),(null==d?void 0:d.enabled)&&t.a.createElement("li",{key:Object(r.a)()},null==d?void 0:d.value)),(null==x?void 0:x.enabled)&&t.a.createElement("ul",{className:h["social-media"]},null==x?void 0:x.value.map(e=>{if(null==e?void 0:e.enabled){var{url:l,network:a,username:n}=(null==e?void 0:e.value)||{};return(null==l?void 0:l.enabled)&&(null==a?void 0:a.enabled)&&(null==n?void 0:n.enabled)&&t.a.createElement("li",{key:Object(r.a)()},t.a.createElement("a",{href:null==l?void 0:l.value,title:null==n?void 0:n.value,target:"_blank"},null==a?void 0:a.value))}return null}))),(null==v?void 0:v.enabled)&&t.a.createElement("div",{className:h.resumeSummary},t.a.createElement("h3",null,k.formatMessage({id:"summary"})),t.a.createElement("p",null,null==v?void 0:v.value)))},c=Object(i.a)(e=>({resumeAwards:{padding:"10px 0",borderBottom:"1px solid #ddd"},award:{fontWeight:"bold"},awards:{margin:"0",padding:"0",listStyle:"none","& li":{margin:"0 0 10px 0","&:last-child":{margin:"0"}}}})),m=e=>{var{awards:l}=e,a=c(),i=Object(n.useContext)(u.IntlContext);return l.length>0&&t.a.createElement("div",{className:a.resumeAwards},t.a.createElement("h3",null,i.formatMessage({id:"awards"})),t.a.createElement("ul",{className:a.awards},l.map(e=>{if(null==e?void 0:e.enabled){var{title:l,date:n,awarder:i,summary:u}=(null==e?void 0:e.value)||{};return t.a.createElement("li",{key:Object(r.a)()},t.a.createElement("p",{className:a.award},(null==l?void 0:l.enabled)&&(null==l?void 0:l.value)),t.a.createElement("p",null,(null==i?void 0:i.enabled)&&(null==i?void 0:i.value)),t.a.createElement("p",null,(null==n?void 0:n.enabled)&&(null==n?void 0:n.value)),t.a.createElement("p",null,(null==u?void 0:u.enabled)&&(null==u?void 0:u.value)))}return null})))},v=Object(i.a)(e=>({resumeEducation:{padding:"10px 0",borderBottom:"1px solid #ddd"},type:{fontWeight:"bold"},institution:{},courses:{margin:"0",padding:"0",listStyle:"none","& li":{margin:"0 0 10px 0","&:last-child":{margin:"0"}}},coursesDetails:{display:"flex","& ul":{margin:"0 0 0 5px",padding:"0",display:"flex",listStyle:"none","& li":{margin:"0 5px 0 0","&:after":{content:'","'},"&:last-child":{"&:after":{content:'""'}}}}}})),b=e=>{var{education:l}=e,a=v(),i=Object(n.useContext)(u.IntlContext);return l.length>0&&t.a.createElement("div",{className:a.resumeEducation},t.a.createElement("h3",null,i.formatMessage({id:"education"})),t.a.createElement("ul",{className:a.courses},l.map(e=>{if(null==e?void 0:e.enabled){var{institution:l,area:n,studyType:i,startDate:u,endDate:d,gpa:s,courses:o}=(null==e?void 0:e.value)||{};return t.a.createElement("li",{key:Object(r.a)()},t.a.createElement("p",{className:a.type},(null==n?void 0:n.enabled)&&(null==n?void 0:n.value),", ",(null==i?void 0:i.enabled)&&(null==i?void 0:i.value)),t.a.createElement("p",{className:a.institution},l&&(null==l?void 0:l.enabled)&&(null==l?void 0:l.value),", ",u&&(null==u?void 0:u.enabled)&&(null==u?void 0:u.value)," - ",d&&(null==d?void 0:d.enabled)&&(null==d?void 0:d.value),", ",s&&(null==s?void 0:s.enabled)&&"GPA: "+(null==s?void 0:s.value)),o&&(null==o?void 0:o.enabled)&&t.a.createElement("div",{className:a.coursesDetails},t.a.createElement("p",null,"Courses: "),t.a.createElement("ul",null,null==o?void 0:o.value.map(e=>(null==e?void 0:e.enabled)&&t.a.createElement("li",{key:Object(r.a)()},null==e?void 0:e.value)))))}return null})))},p=Object(i.a)(e=>({resumeInterests:{padding:"10px 0",borderBottom:"1px solid #ddd"},interests:{margin:"0",padding:"0",listStyle:"none","& li":{margin:"0 0 10px 0","&:last-child":{margin:"0"}}},interest:{fontWeight:"bold"},keywords:{margin:"0",padding:"0",display:"flex",listStyle:"none","& li":{margin:"0 5px 0 0","&:after":{content:'","'},"&:last-child":{"&:after":{content:'""'}}}}})),g=e=>{var{interests:l}=e,a=p(),i=Object(n.useContext)(u.IntlContext);return l.length>0&&t.a.createElement("div",{className:a.resumeInterests},t.a.createElement("h3",null,i.formatMessage({id:"interests"})),t.a.createElement("ul",{className:a.interests},l.map(e=>{if(null==e?void 0:e.enabled){var{name:l,keywords:n}=(null==e?void 0:e.value)||{};return t.a.createElement("li",{key:Object(r.a)()},(null==l?void 0:l.enabled)&&t.a.createElement("p",{className:a.interest},null==l?void 0:l.value),(null==n?void 0:n.enabled)&&t.a.createElement("ul",{className:a.keywords},null==n?void 0:n.value.map(e=>(null==e?void 0:e.enabled)&&t.a.createElement("li",{key:Object(r.a)()},null==e?void 0:e.value))))}return null})))},E=Object(i.a)(e=>({resumeLanguages:{padding:"10px 0",borderBottom:"1px solid #ddd"},languages:{margin:"0","& li":{margin:"0 0 10px 0","&:last-child":{margin:"0"}}}})),f=e=>{var{languages:l}=e,a=E(),i=Object(n.useContext)(u.IntlContext);return l.length>0&&t.a.createElement("div",{className:a.resumeLanguages},t.a.createElement("h3",null,i.formatMessage({id:"languages"})),t.a.createElement("ul",{className:a.languages},l.map(e=>{if(null==e?void 0:e.enabled){var{language:l,fluency:a}=(null==e?void 0:e.value)||{};return t.a.createElement("li",{key:Object(r.a)()},t.a.createElement("p",null,(null==l?void 0:l.enabled)&&(null==l?void 0:l.value),", ",(null==a?void 0:a.enabled)&&(null==a?void 0:a.value)))}return null})))},y=Object(i.a)(e=>({resumePublications:{padding:"10px 0",borderBottom:"1px solid #ddd"},publications:{margin:"0",padding:"0",listStyle:"none","& li":{margin:"0 0 10px 0","&:last-child":{margin:"0"}}},publication:{fontWeight:"bold"}})),x=e=>{var{publications:l}=e,a=y(),i=Object(n.useContext)(u.IntlContext);return l.length>0&&t.a.createElement("div",{className:a.resumePublications},t.a.createElement("h3",null,i.formatMessage({id:"publications"})),t.a.createElement("ul",{className:a.publications},l.map(e=>{if(null==e?void 0:e.enabled){var{name:l,publisher:n,releaseDate:i,website:u,url:d,summary:s}=(null==e?void 0:e.value)||{};return t.a.createElement("li",{key:Object(r.a)()},(null==l?void 0:l.enabled)&&t.a.createElement("p",{className:a.publication},null==l?void 0:l.value),n&&(null==n?void 0:n.enabled)&&t.a.createElement("p",null,null==n?void 0:n.value),u&&(null==u?void 0:u.enabled)&&t.a.createElement("p",null,null==u?void 0:u.value),d&&(null==d?void 0:d.enabled)&&t.a.createElement("p",null,null==d?void 0:d.value),i&&(null==i?void 0:i.enabled)&&t.a.createElement("p",null,null==i?void 0:i.value),s&&(null==s?void 0:s.enabled)&&t.a.createElement("p",null,null==s?void 0:s.value))}return null})))},h=Object(i.a)(e=>({resumeReferences:{padding:"10px 0"},name:{fontWeight:"bold"},references:{margin:"0",padding:"0",listStyle:"none","& li":{margin:"0 0 10px 0","&:last-child":{margin:"0"}}}})),k=e=>{var{references:l}=e,a=h(),i=Object(n.useContext)(u.IntlContext);return l.length>0&&t.a.createElement("div",{className:a.resumeReferences},t.a.createElement("h3",null,i.formatMessage({id:"references"})),t.a.createElement("ul",{className:a.references},l.map(e=>{if(null==e?void 0:e.enabled){var{name:l,reference:n}=(null==e?void 0:e.value)||{};return t.a.createElement("li",{key:Object(r.a)()},(null==l?void 0:l.enabled)&&t.a.createElement("p",{className:a.name},null==l?void 0:l.value),(null==n?void 0:n.enabled)&&t.a.createElement("p",null,null==n?void 0:n.value))}return null})))},O=Object(i.a)(e=>({resumeSkills:{padding:"10px 0",borderBottom:"1px solid #ddd"},skills:{margin:"0",padding:"0",listStyle:"none","& li":{display:"inline-flex",margin:"0 0 10px 0","&:last-child":{margin:"0"}}},title:{fontWeight:"bold"},keywords:{margin:"0",padding:"0",display:"flex",listStyle:"none","& li":{margin:"0 5px 0 0","&:after":{content:'","'},"&:last-child":{"&:after":{content:'""'}}}}})),j=e=>{var{skills:l}=e,a=O(),i=Object(n.useContext)(u.IntlContext);return l.length>0&&t.a.createElement("div",{className:a.resumeSkills},t.a.createElement("h3",null,i.formatMessage({id:"skills"})),t.a.createElement("ul",{className:a.skills},l.map(e=>{if(null==e?void 0:e.enabled){var{name:l,level:n,keywords:i}=(null==e?void 0:e.value)||{};return t.a.createElement("li",{key:Object(r.a)()},t.a.createElement("p",{className:a.title},(null==l?void 0:l.enabled)&&(null==l?void 0:l.value),", ",(null==n?void 0:n.enabled)&&(null==n?void 0:n.value)),(null==i?void 0:i.enabled)&&t.a.createElement("ul",{className:a.keywords},null==i?void 0:i.value.map(e=>(null==i?void 0:i.enabled)&&t.a.createElement("li",{key:Object(r.a)()},null==e?void 0:e.value))))}return null})))},N=Object(i.a)(e=>({resumeVolunteer:{padding:"10px 0",borderBottom:"1px solid #ddd"},volunteers:{margin:"0",padding:"0",listStyle:"none","& li":{margin:"0 0 10px 0","&:last-child":{margin:"0"}}},position:{fontWeight:"bold"},website:{},summary:{},highlights:{margin:"0",padding:"0",display:"flex",listStyle:"none","& li":{margin:"0 5px 0 0","&:after":{content:'","'},"&:last-child":{"&:after":{content:'""'}}}}})),w=e=>{var{volunteer:l}=e,a=N(),i=Object(n.useContext)(u.IntlContext);return l.length>0&&t.a.createElement("div",{className:a.resumeVolunteer},t.a.createElement("h3",null,i.formatMessage({id:"volunteers"})),t.a.createElement("ul",{className:a.volunteers},l.map(e=>{if(null==e?void 0:e.enabled){var{organization:l,position:n,website:i,url:u,startDate:d,endDate:s,summary:o,highlights:c}=(null==e?void 0:e.value)||{};return t.a.createElement("li",{key:Object(r.a)()},t.a.createElement("p",{className:a.position},(null==n?void 0:n.enabled)&&(null==n?void 0:n.value)+", ",(null==l?void 0:l.enabled)&&(null==l?void 0:l.value)+", ",(null==d?void 0:d.enabled)&&(null==d?void 0:d.value)," - ",(null==s?void 0:s.enabled)&&(null==s?void 0:s.value)),t.a.createElement("p",{className:a.website},(null==i?void 0:i.enabled)&&(null==i?void 0:i.value)),t.a.createElement("p",{className:a.website},(null==u?void 0:u.enabled)&&(null==u?void 0:u.value)),t.a.createElement("p",{className:a.summary},(null==o?void 0:o.enabled)&&(null==o?void 0:o.value)),(null==c?void 0:c.enabled)&&t.a.createElement("ul",{className:a.highlights},null==c?void 0:c.value.map(e=>e&&(null==e?void 0:e.enabled)&&t.a.createElement("li",{key:Object(r.a)()},null==e?void 0:e.value))))}return null})))},S=Object(i.a)(e=>({resumeWork:{padding:"10px 0",borderBottom:"1px solid #ddd"},works:{margin:"0",padding:"0",listStyle:"none","& li":{margin:"0 0 10px 0","&:last-child":{margin:"0"}}},position:{fontWeight:"bold"},website:{},summary:{},highlights:{listStyle:"disc","& li":{fontStyle:"italic",margin:"0"}}})),C=e=>{var{work:l}=e,a=S(),i=Object(n.useContext)(u.IntlContext);return l.length>0&&t.a.createElement("div",{className:a.resumeWork},t.a.createElement("h3",null,i.formatMessage({id:"experience"})),t.a.createElement("ul",{className:a.works},l.map(e=>{if(null==e?void 0:e.enabled){var{company:l,name:n,position:i,website:u,url:d,startDate:s,endDate:o,summary:c,highlights:m}=(null==e?void 0:e.value)||{};return t.a.createElement("li",{key:Object(r.a)()},t.a.createElement("p",{className:a.position},(null==i?void 0:i.enabled)&&(null==i?void 0:i.value)+", ",(null==l?void 0:l.enabled)&&(null==l?void 0:l.value)+", ",(null==n?void 0:n.enabled)&&(null==n?void 0:n.value)+", ",(null==s?void 0:s.enabled)&&(null==s?void 0:s.value)," - ",(null==o?void 0:o.enabled)&&(null==o?void 0:o.value)),t.a.createElement("p",{className:a.website},(null==u?void 0:u.enabled)&&(null==u?void 0:u.value)),t.a.createElement("p",{className:a.website},(null==d?void 0:d.enabled)&&(null==d?void 0:d.value)),t.a.createElement("p",{className:a.summary},(null==c?void 0:c.enabled)&&(null==c?void 0:c.value)),(null==m?void 0:m.enabled)&&t.a.createElement("ul",{className:a.highlights},null==m?void 0:m.value.map(e=>(null==e?void 0:e.enabled)&&t.a.createElement("li",{key:Object(r.a)()},null==e?void 0:e.value))))}return null})))},I=Object(i.a)(e=>({resumeDefaultTemplate:{padding:"40px","& h3":{margin:"0"},color:e.palette.text.primary,"& a":{color:"#8da4f7"},"& a:visited":{color:"#48578a"},"& p":{margin:0,marginBlockStart:0,marginBlockEnd:0}}}));l.default=e=>{var{resume:{basics:l,work:a,skills:i,education:r,awards:s,volunteer:c,publications:v,languages:p,interests:E,references:y}}=e,h=Object(u.useIntl)(),O=I(),N=Object(n.useMemo)(()=>{var e=d.find(e=>e.locale===h.locale);return e||d.find(e=>e.locale===h.defaultLocale)},[h.locale]);return t.a.createElement(u.RawIntlProvider,{value:N},t.a.createElement("div",{className:O.resumeDefaultTemplate},(null==l?void 0:l.enabled)&&t.a.createElement(o,{basics:(null==l?void 0:l.value)||{}}),(null==a?void 0:a.enabled)&&t.a.createElement(C,{work:(null==a?void 0:a.value)||{}}),(null==i?void 0:i.enabled)&&t.a.createElement(j,{skills:(null==i?void 0:i.value)||{}}),(null==r?void 0:r.enabled)&&t.a.createElement(b,{education:(null==r?void 0:r.value)||{}}),(null==s?void 0:s.enabled)&&t.a.createElement(m,{awards:(null==s?void 0:s.value)||{}}),(null==c?void 0:c.enabled)&&t.a.createElement(w,{volunteer:(null==c?void 0:c.value)||{}}),(null==v?void 0:v.enabled)&&t.a.createElement(x,{publications:(null==v?void 0:v.value)||{}}),(null==p?void 0:p.enabled)&&t.a.createElement(f,{languages:(null==p?void 0:p.value)||{}}),(null==E?void 0:E.enabled)&&t.a.createElement(g,{interests:(null==E?void 0:E.value)||{}}),(null==y?void 0:y.enabled)&&t.a.createElement(k,{references:(null==y?void 0:y.value)||{}})))}},pRgV:function(e){e.exports=JSON.parse('{"awards":"Prêmios","volunteers":"Voluntários","skills":"Habilidades","references":"Referências","publications":"Publicações","languages":"Línguas","interests":"Interesses","education":"Educação","summary":"Sumário","experience":"Experiência"}')},shV4:function(e){e.exports=JSON.parse('{"awards":"Awards","volunteers":"Volunteers","skills":"Skills","references":"References","publications":"Publications","languages":"Languages","interests":"Interests","education":"Education","summary":"Summary","experience":"Experience"}')}}]);
//# sourceMappingURL=1-17e926c84934ce155091.js.map