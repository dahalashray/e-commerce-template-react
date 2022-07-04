import { Email, Facebook, GitHub, Instagram, Map, Phone, Twitter } from '@material-ui/icons';
import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className="f-container">
            <div className="f-left">
                <h1 className="f-icon">ShopIt</h1>
                <p className="f-desc">Shopping is an activity in which a customer browses the available goods or services presented by one or more retailers with the potential intent to purchase a suitable selection of them.</p>
                <div className="f-socialcontainer">
                    <div className="social-icon">
                        <Facebook />
                    </div>
                    <div className="social-icon">
                        <Instagram />
                    </div>
                    <div className="social-icon">
                        <Twitter />
                    </div>
                    <div className="social-icon">
                        <GitHub />
                    </div>
                </div>
            </div>
            <div className="f-center">
                <h3 className="f-c-title">Useful Links</h3>
                <ul className="f-c-list">
                    <li className="f-list-item">Home</li>
                    <li className="f-list-item">Cart</li>
                    <li className="f-list-item">Man Fashion</li>
                    <li className="f-list-item">Woman Fashion</li>
                    <li className="f-list-item">Accessories</li>
                    <li className="f-list-item">My Account</li>
                    <li className="f-list-item">Order Tracking</li>
                    <li className="f-list-item">Wishlist</li>
                    <li className="f-list-item">Terms</li>
                </ul>
            </div>
            <div className="f-right">
                <h3 className="f-r-title">Contact</h3>
                <div className="f-contact-item"><Map className="f-contact-icon" /> Maitrinager, Kirtipur-2</div>
                <div className="f-contact-item"><Phone className="f-contact-icon" /> +977 9841628059</div>
                <div className="f-contact-item"><Email className="f-contact-icon" /> dahalashray@gmail.com</div>
                <img className="Payment" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYQAAACCCAMAAABxTU9IAAAAz1BMVEX////PChAAAADNAADdVlnrnJ7KAADIAADOAAP/+/vYQ0b43+DkjY7x8fFtbW3MAATRFx377e3Ozs4RERH42tvgfoDzy8xISEjVTE3QLS/21NXs7OzcX2KDg4NcXFzQCxK1tbXro6V8fHwZGRmsrKzf39/AwMCioqI5OTnMHh799fUmJiZlZWXga27k5OTW1tZSUlKamprvubqOjo7ec3XrrK0uLi4+Pj7vtrfONDVJSUkXFxfzw8XZO0DSJCnee3zfZWjaS0/iiInGExPMKSrKZmDUAAAQYElEQVR4nO2daVfqOhSGgUBySsFSGWSSSQEBAQdQ8SAi+v9/06UjGdsU5VC8fdfygyUd2E+zk+ydhFgsUqRIkSJFihQpkkj6PPX71F4qx7arvJRq5g38RsU/5oUT4aAWAfgT/5UCIJdRj21fGRU+wLFtdUBpIF06toX9pVZ+M4O4URtejm1jXyV/OQOjMoS9LjzAY9vo8AJvIW+df39F2Apkjm1mT5Uq2rEt9A8EPsLcRVIyx7bPv1Hz4diW9pD6v/BG26rQPralPaSmf+kojRLIhLhpjiCEQBGEECiCEAJFEEKgCEIIFEEIgSIIIVAEIQQ6bQjyYa8IwqH0ufpEUC4xe7oQmtt3DRICYQq5wnl12c7U0wD6P9XJQoAIQW2RrK/Hs9lsPF4ny2+rnzTidwXN8LReKM1yyC8zdaIQIFrVU1VdH2LS9VKIgq7AyREM9UwTgaZn2VOEAOJ1bgS+FJ5kqNbEEzWbBYx7YDg9CM04fHvhP3SIIICKjj9Z4R15NA2nByGO0rqgfIggQOohlTmEwrpwehDgWvjEYYIwVofkwxXKSFT45CDApKgehApCvLlYt0tEAl9fiyicGoQ/g4K4fIggbFsuCD/LRbwDoY8R3yOdGgS08SgfIgimNAA/FxgGEYUTg6ABr8cNGwRDEKWX7gPqde4TnhgE+O5VPmwQrNcewozbjKnc0MqpQVh6lQ8VhCZCTrwC1d0W+oHXOJ8YBODRLIcMAso8pOpfVvgOalXnGVOcZzwtCH8q3FmbQ7VUKhX0WCFEsaM4Mh61lBmYRocD1f1O7EN6Q5ic9677/VbvfOKHqtY977Va/a2uW73edJLdx+i0GAiAO0gojcuV1SqdnM3CBAGaj6rYYzSYdCjMWYfkQOie47JM2OvcjRKmnl5v+zWxsbrXncbFUz7h6Or57vaxt+MwOSfFXID63DmThTAbMufGlggCTdMAAJ5Rsn8sDdiPN9xYFIrOe1xhHJINIXuWyO+U6BmWvUgQuurw326ld5dPcJS/OnO4tfCL25fHNX0iPh855zEQYJGFoHyEqSVwBTX3CdsmBeQsi1oyVWEHAdfWSn2OXa9ZDNneDY+ArU7XLETzvKQuQt3rzDlOQ2jCDesWh6KEGoDIlkRyi5YGJU/VBHeBld0jZgyzw5zzwG/0WyOCcMk16hlNYdLxQLDVjfXSU6UuqHeZvHnCdVcuhGbcWvmLiiwEHUJ3YbDjjQzLQFBJrsdb1T9yYGsjqr34w64r1uzT/2zPBm/GyetkDjJnYsYzLrsy77Kuf6yMf6Hz2qA69p4kDbMjZ0HOXA7C+bXAqJT5aheCcq6uTAot6iDZKkyfSXCuoXc1IVc2lU5xILyVHTnfCS7GqRe8H6VU55vkAGLW1CplRgMLN6zM2tXd5V+KaQg4jY0GP9PvbWLRX+ElNV5sHZGZ/85lqq7vLBhrUMGX/X9pIANh1LkSGfUCrwtZPwSuwSmfdU+YsUd+2Hc/cCHA+lA3xWmXY7qj4cp4xSCYzaucYsNluwzddxC2hzqtsXl6uk2frc6TTJOvwVzxgddfLrxkVsZtmhoCaxdRynBIyF4Loo+pusWvCR7CmufsncwJDeOEe+oixHM/ktSmHAhrztdllYNxCMdVHinreg8Lx7fAOfOpMoNNgDY8y+ptiLsQI0S6Ee6IoKjtJjIfHH450TtjOXYTzuxTNvCbEBIt924in0XJcEg18tDNFHvoLOnTbnd9YawmiOxKaOvAk55D6m1Pxe4gQnaFkjKGcCFaU1wtY4kxgDySGqYyn2bdAZ9OmGVtxE8H9tXb2nchJJyq0GX6RfnRaMQ6siuj8C0LxhEFaOeNAkMAlZRvGbVo9mK4EFBajFCtuxRgZe4bZqjW7TGaXS1NfwTtilFdad+F4PgSuiJcPLam3Wnv/pbmYPRTqaYZbxRIV3Uzwb54QAhvnuE9R3OjgeZBWC94bYn7MAvoMPCpbaZ0a4yGbLurZntj97CHCyAP4e9r45U9mrf8hdIgD5917dszQ4fr7cEu2QN6xtp3snQD/97BICjCxoDU8gvwIAzT3itZlxYElJRcdWyODtDa+kc3RjNwYT9hEspCeO1lDfUZr2ONtaiuET6EoD4yqw7Z+iawIAj5Ae6ogtYEWZUGgFcT/IxrBkDh2qc5wMqjbR+puZmt0ytgvfpAVYa6qqofkhBGrsfI0gO3O9OC52RxvKmlhsDmy90jndTO81NeDb/MoSDEHiDaY+lwYetF6KksXhoWkTNfVrMaATAujpPpFT1hWwThqoVdjaZgvq2k8RrE7UlAd8YhhXRsN27ZDnGc6LweDML2Jd1n/XYRaTDIDgjKiuqLNq2ROR0KEUEgwjv0oMx8jXt3jZ3uWsTdyeGXNcAjje2+8VmyaSEq1OEg6HX/fhSrAoLBtsVRvebd+ULIkxcj32xr/OUl0uAWBIW8Rssu2vuLH30lAuZBB2sBtPSatSEUeOe3/Vs/z/dS9LAsEAQyrhCbkH2bxIR3Q1dZKg5hhzqeiINOqJT0an3iQi4EkCxUTfGcgbo9HnhDP0XetWNK8vrA6nyzTpbrGd4OXgWpjcsEEGgrU2EHNi3jqnZ+fUblF2wI5FChYZkt28EPXpGZBiyUPTAV5+UT6p+DT16yx/hMLZX2srZAPNQZY0GOmVHiDTNS4hmofhCeaX9DjbVavCes9fqPZxecIbMNYUKwGVn27hIHz8grYhA0U7ykTqwOwYA7SlMzOWP9zsdccvxgS9EDcBuud5FuGGcfo/Ql0SrwIVzSyKkOJpmVqU17/UuPoLYNQSE7WZbHIz0X6Y046U0BhCTPPsu0OeVEg2gWoEuzTBXH44wsN2WGpcmacMHeaCzRKvAh9OlLTYXD2lqLjVPwIVDV6YztM+WpPLYsBMTbv0yNu18fCdpTVsP3gZEjguhDrjyVquTMGG8L5p/6Q2jRl5qQL7rby69dXnATzFwIE2KoMDLDHETBV+qushAg5+hwgXljJNkhVT6sPmUzjtJSJwDqPUdMWEmRWM64H4SRdZQZS3tDoEIX5mwC5gguSQgozjEPMbNEy8m5+Qx2EptwYMXk7FGRKZP290f7QbCGWl2ppA4GgRxuGINjAkue7g7IQhizB4dk9kpugIzvhAvfJXq9M+Sm+a1cP6pwyvj6I0kIVBDUhEAPHjCRjcQuJUq0LMaAkGDboe8qC4ET/SwsiFOdYKa32tiLDer+lUcpJuukkuz7ILG1q2TDfE6OtIw8TXbEtX9+9NqpkU3wDgI53DiPTUfk/5RkIXA6P6UccSJk31CeTTF7gYVM1kBCqv/+CpJd1BYRXDAb5g4L4On28r7HppR3EMgg1CU5XG4wc/wkIcQ5EJZU2iQu0T8iNp/UVl4ZngDS33wHzXwITHCIijdvu6hTBkGn5c5fFEEgyd2R4dlH1ipyEAYcCNTcHg1KvNcF3Fxa7oe2sNbLvv5IELagX0oqJXPJHEk0poqoOAaBGJvd1PC7jui+kTSEBcd70zPQkYRJq+R+xD8FYb0vBMo9d6nhWC9Wo5KbZKNKvPA4hAneobrq4C3NHfv8khA4eRaFDl96ry6xRELQfgjC8H1fCFQQhwodJab0EJrqXZJzK/AJY3QF2umafX5JCGUZCBI7IR+mJiiZfSEkyJaZ6gj9ndDdpduYR3kcwjm/T8Xc0dT+7oj55uhoNSHW3hsCURU61IedrHdEj2q0iamTogEehdGUJISKRJsgkxI7EARm/q80BKyvotzTn10zYVWySaCiGQQE3pR7Q2yz/LO9I4lA6oEgvOwPIXFmN87dDh2iMyYxUm6FmK1NT80jIFBZTveavGSdJARNZpwgEYQIDEFRC/5SU3uOE0xdNS7v7x9vWSduuCqqTcC7U3THiYQg8EdUPtXSN0bM1QG5ZOPN16J7QNDTCPrLP8G5xzRI0+B0MCnvLFGrTZmQEgmBHeWZp/O+pCwETsCzQC6S5MX4GAV3RzIZGwntAcHM6NCraxL5236r17u+v2VPICFMntgSgvkbshA4E2KGM8I+PE6MgkNISWRsDgPBmnPKtNbGUkF+iu2CHH9zzmQDqKZkIQD2YOzlc3daE1ZkUmvBIah7rIb7EQj2oKom7PAzeiYb3R6nCH8OjXR6k9NHVepYXFqqIuzTO6oLN5JyL7M3BI+ksTvxV9TXZEUsCaGznBYm/lf8Xo4Z2gZqxtFMom+0F4QCVRU4P3O692yLZzpO4erOdS2KR17tgqBIh+Y6THkmf2HbUXa2RZlroAUyF5lDNJMwZ2y/cQK5Ph82q/RCuKFE4y2oCVnBe46/svTq5J0aNbKHRPU/2WsLplXKQoh/cn+/Uk/VF6uv8kzKF8X2g6CkdqvZNFhmA+aKhEPiQ8jXYi1OJyZPJnu6nJ7QVk/9WJaEQC1/ZqrZmcBbSEOAghl4erVUkp9ztN+IeflmLJo2/v7wfte37dtqiCD83TqdKT3mStydU8aq3XPmu3SmfpFxZsEhd5AQCwAhDgKnwThtuT8Enfe26KVMuVL5yCxVzqe6zC8ZiyHEsj3ifX5ucZxGlwpN5x+t3M75Ga5b0sr0RJmLLnthU/IQYDrYVMfYnNNO+ENoB/6VzI3MSMIDgnHY2L7l+eKi0eERsDTtn91dbAvd3V62vGdr22rR1YfNa9qShyA9vcuWXuaU94dQggFrXGm1fxf1Lza8qk0mHrvs7MpI7nCUvaYbmyuRNwoCQfsMFPTc8CYiSUBA3H6YWBIzv6Qg/JAm14b6jw2mGbkRduIDQIgDjzXIjOZoTwiAFyIRKynRKv9LCOLl/9wAqqkgEOKwLN0PekAaZ/WmlDvaDvykW5/hTI7Bv4PAtASuxH4sEAR5Ci8r7jpmOQjC7jAjmWFaWCA0xOcEg9CEaal2IRPnr+iXhBBHaSnY+kKyHoQBgsfSq2AQthRQxncCqZpEgr0tZCHEIWz73obaFybkEAQ765kKCMGwT33p6SzU1Jf1fn4HQhPA5IPnbYYPdej9Cy6hgvA09TiHsxEhpyeFQWjGwedaPMNo2C47yUZ/CLx5R1W4uw03XGXpZf0ZKOV2bAiC+KklTk1gtuvS6U3AIaq06R+QiBnLAQszgC3y4+z8VSIhLNlbYb+cBJGWKbBhDEVXM3Hfn5MKFwR+Rs0RZ+v+HCN6QznDPiCZellWVctGQ10tLefFCiSW1zcH7KX8bpUjPAxAcFWcL0uqtSmc4t4mcOL5qBBG4iGCCILGive14LZZXCTXs+Km+D6rl78ANPelC3QlTgGiRNO8DViV6+P34sa4zQqytwk7hFtxx6gmghBA5p7B0Nyw85A/RfgDt3EgUKmBw4+Yby6nHjnH7A9AOB3ZEJTrS1yPP7LfOKHp7uKP/eueKHpN6H8GIZyKIIRAEYQQKIIQAkUQQqAIQggUQQiBIgghEO+XmH6jQg1BX/9PIMhO1DyK2uH5tagDSltJbbR+LKmLQ4bewiJQDzh98B/rf+GPwu2NjF9tPbaFDi+wPraV/ZT59RTAW5A90I+iIf1LTL9N4O2HNrc6pPRN/BdjAM3ZT24jfTi9JDnL8X6Hcl4TZ8IlvbqpJ3+hxinBhv+RIkWKFClSpEiRIkXi6j+FRcomtVX3EwAAAABJRU5ErkJggg==" />
            </div>         
        </div>
    )
}

export default Footer;
