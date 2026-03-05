import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
selector:'app-contact',
standalone:true,

template:`

<section id="contact" class="contact">

<h2>Contact</h2>

<p class="text">
Feel free to reach out if you'd like to collaborate or discuss opportunities.
</p>

<div class="links">

<a [href]="'mailto:'+data.contact.email">
📧 {{data.contact.email}}
</a>

<a [href]="data.contact.linkedin" target="_blank">
🔗 LinkedIn
</a>

</div>

</section>

`,

styles:[`

.contact{
text-align:center;
padding:100px 20px;
}

.text{
color:#94a3b8;
margin:20px 0 40px;
}

.links{
display:flex;
justify-content:center;
gap:30px;
flex-wrap:wrap;
}

.links a{
background:#1e293b;
padding:12px 20px;
border-radius:10px;
text-decoration:none;
color:#e2e8f0;
transition:all 0.2s;
}

.links a:hover{
background:#334155;
}

`]

})
export class ContactComponent{

data = PORTFOLIO_DATA

}