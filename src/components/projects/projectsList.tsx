/* This example requires Tailwind CSS v2.0+ */
import { NextPage } from 'next';

// const posts = [
// 	{
// 		title: 'Prochainement',
// 		href: '#',
// 		category: { name: 'Article', href: '#' },
// 		description: 'Cet article est cours de rédaction',
// 		date: 'XXX XX, 20XX',
// 		datetime: '2020-03-16',
// 		imageUrl: 'https://pbs.twimg.com/profile_banners/3150677751/1648159331/1500x500',
// 		readingTime: 'XX min',
// 		author: {
// 			name: 'Roman Gascoin',
// 			href: '#',
// 			imageUrl: 'https://pbs.twimg.com/profile_images/1507113722808094726/fSJMd5Gs_400x400.png',
// 		},
// 	},
// 	{
// 		title: 'Prochainement',
// 		href: '#',
// 		category: { name: 'Article', href: '#' },
// 		description: 'Cet article est cours de rédaction',
// 		date: 'XXX XX, 20XX',
// 		datetime: '2020-03-16',
// 		imageUrl: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/5fbcb8f112f6d30001f4ba23/0x0.png',
// 		readingTime: 'XX min',
// 		author: {
// 			name: 'Roman Gascoin',
// 			href: '#',
// 			imageUrl: 'https://pbs.twimg.com/profile_images/1507113722808094726/fSJMd5Gs_400x400.png',
// 		},
// 	},
// 	{
// 		title: 'Prochainement',
// 		href: '#',
// 		category: { name: 'Article', href: '#' },
// 		description: 'Cet article est cours de rédaction',
// 		date: 'XXX XX, 20XX',
// 		datetime: '2020-03-16',
// 		imageUrl: 'https://cagesidepress.com/wp-content/uploads/2019/09/Salahdine-Parnasse.jpg',
// 		readingTime: 'XX min',
// 		author: {
// 			name: 'Roman Gascoin',
// 			href: '#',
// 			imageUrl: 'https://pbs.twimg.com/profile_images/1507113722808094726/fSJMd5Gs_400x400.png',
// 		},
// 	},
// 	{
// 		title: 'Prochainement',
// 		href: '#',
// 		category: { name: 'Article', href: '#' },
// 		description: 'Cet article est cours de rédaction',
// 		date: 'XXX XX, 20XX',
// 		datetime: '2020-03-16',
// 		imageUrl:
// 			'https://camo.githubusercontent.com/88e3892aedcc6421a12acf95ee6d8d5bbb5d773bfae5c5767c25ed554c8358dc/687474703a2f2f696d672e796f75747562652e636f6d2f76692f765a6a4c393365735774302f687164656661756c742e6a7067',
// 		readingTime: 'XX min',
// 		author: {
// 			name: 'Roman Gascoin',
// 			href: '#',
// 			imageUrl: 'https://pbs.twimg.com/profile_images/1507113722808094726/fSJMd5Gs_400x400.png',
// 		},
// 	},
// 	{
// 		title: 'Prochainement',
// 		href: '#',
// 		category: { name: 'Article', href: '#' },
// 		description: 'Cet article est cours de rédaction',
// 		date: 'XXX XX, 20XX',
// 		datetime: '2020-03-16',
// 		imageUrl:
// 			'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIWFRUVFhcVFRUYGBYXGBgVGBcWFxUXFxgYHSggGBolHRUVITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHx8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKMBNgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABHEAABAwIEAgYECQsEAgMBAAABAgMRAAQFEiExBkETIlFhcYEykaGxBxQjM0JysrPBFSQ0Q1Jic3SCktEWouHwwvFTY8NE/8QAGwEAAgMBAQEAAAAAAAAAAAAAAQIAAwQFBgf/xAA+EQABAwIDBAgEAwQLAAAAAAABAAIRAyEEEjEFQVFhExQicZGhsfAygcHRFVLhM0Jy8QYjJDRDgpKisrPS/9oADAMBAAIRAxEAPwBitzCQnKZrV9pPNMGrOGYgkwTzrzGLxB1Fde8rzAaFDYMNuKCEnU9nZR5zhNJghSgRQvgl1pTqiIzRppynX8KfhWetVc10BbMNhmkSVzjEcOW2qM2s+yrFs2dJIJBFW+P3Q2lKwYMxSJY4s4ViFHce+r6ZLmys9TDHNaLLpWOD5Lae6ucv2SulDjjfV7AJinTiO/UhlKh2j3Gkl/iRSDJANSiOyhUD8xLRqprptgJHUygxqRFVxbWyiElSZPYqheOcSJdaKQIVI07I50rrfq5GlhXubJJCcF4IAgqSuSCeroZE8vKmnhPCi2tRmQpIjyPP11yxm7UNifXXQfgzuFKU4ConRO5J5mkf8JWg0qjdXSO5XbqwdTe9M2kLKdkkxmOQgj1TWXl7KVF6xUJgqMDRKVCRGUGCRrJ11rfF03fxlSrZCl9HlOgzAEpI2586qXHEt63PSsjUgnM2pOo251VE/wA1bSa+ECeu7Qq0YIGWFGCDmzIkhMkAZQvsOvKqd5hrAU5L6goHTUKJSUIO5AkyVCJHLvou/wAVKVoWkxoDrJMFJMkidQI86jViViVKQpkZDBzJEQIQSE+iRqFDbnzokFaQSNyEqw5SVISzcElZJgGBGTMmSknUjMNhNTN3d03AC0qRqZgZfRzGTlCvRTPhXjxsFhSsy0KJJCcqiAmFQAI+qNz6qgdtbbOehuvRGUFYTBBCp3I0idI50vvRPMmI8kUtMYcbR0btqhxtG0pMDTYK1nRVbjH7Za0EM9FBMlJ9GSCCO2IO4oMjpsiVofEELAzaKJIDiz1Un9lJEnTKNdqiv8XdbyIdDeitcuqiEpQQFKnYhQMae6oIlQslOFrjbOWBdKQoiDm6w07NO2jFjeBwg9O05p2RvXFFXdQi7WDKSQe0GKJgKs4TPovoC4tWylXSMpyga5Ty7xXGuIrBpb61W0BsxEbTAmO6qlnxBdIkB5ZCtwTO/jtRRggJpV2tibHa973VTYe/5JcXhix31jqSBqKZEvpNVLvKaRw5rtv2XSptJpu+qXWbpxJCkrUCNAQTIHZ7TTPw3xzcWxVJ6QKjQ6QQAAZHcBQ026TyFGMBs7JSVIuEwZzJXJGkAZdDvRBlcHE7PcymTGbkNU38P8Xv3DK3nGkKS2oIKButSoM66ACrg4ptVfOsLbUk6mCIM6AkaUq2uG2uvQXLjYOpCoyiBAnMN6KdA71VJfacCTsrx7t6cBpXIqMq03WBHK4j1Cnv+JbVLZdZuXukQSUtKKjmOwBCuVA7f4R7jLlcabcGvan/ADNFRZuLWnpLZkpLgCiCD4cqOXmCWZ+dsFJOslCCdufU7ahCZjmfvsJnmPpCXLHiXD1ph62gq9I5UnlyI2q6vCsJeR8k4EKjTrQZ7wTQi/4YaKlrQVNIJhAIIA05ztVG54SWEZ0upVAmB/7qEFX5qI+Go5p+aoYrY9ApKQsLkTIqo48pUAkkDaq6QZ15VMBVTtbL0GFDujhxkjepFDSqaBrV1Q0qogaigFfXFwrqRXtegV5QW4Cy6u84lEDIfVWig2tBJ0o8FK5o91aOrAGqCfKa2Zl8myjSSqGDtpaKVIpvRjaI1OtLjK0H6BHimKm+LtnkKqqMDjcK6nVdS0KF8XsKuVAhUJA0HvNA7TAVp13502qtWzpPtrZFkOSjThwAgJC+qd4VDiZtbjASgSZB99c/vMLd16prpWKIXlhG9LNym4QkjJObnz1pqcQj0rwYELnFwAKoKpou8BdnVB9VUnMCcmMivUaddJlVo3oQ1XSvgoT13fBPvNJH5LWndJHkacOALsMLWF6SBvpsTSvBylSo8Ftl0Vu0C1OpKikKWxJSSk/S0BG07VQxm3cbu0sNXDyQ42SkZisIXrBVmnqaa1Xdx1rorl1SStCVMCEqymTmghQ7DSpe8VWS1KJ+OIUpJQpSXG1yk7jraxWbK6fesBWUh2VS4j4kdaecaPRuhCimXWGiSRoo+jIEzHdQFziRtXp2Vufq9M0f9jkeyrmLOWNworVe3CVGAS5bpVsABJbc7AOVClYPbn5vEWD/ABG7lv8A/NQ9tXBo4eRVyxV9ZK9K1eb727gK9jrR99RqRYq9F66b+uy04PWh1J9leHAFfQubNzuTctpPqdyVg4XvD6NuV/w1su/drNLLePn91YFovDGFehiDRO3yrdy1p2SG1JG/bWr2BPKgJftntSRluWJkwCYcUlR9FPqrS4wS6R6drcJ7yy6B68sUPcGXRWh7Dp76IvoVFeXwtep1+KPKHahJcHrbzCqT9stvRxC0HsWlSftAVjAAMpMHtTofWKLMY3dI9G6fA7OlWR6iYoZT79lWsJCEMKlQjtplLfU868teJLgqHSdE6J/WsML9uSfbTYcYaKflLK2V4JW2f9i/wqt0g6L0WyHPLX9me4j6wuWuKIJ8ajU8rtNN67rDFE57F9szu1clXsdT+NC+KsLZZUyq3LhbeYS8A7kzpla0kHII+h7aYdy4T6jg6Lj33oKm5UOdSovlVXy14BUyhOyvUbo4p54ctrm4tHUsNJWOkTm6wC9ADoDpG3OqzODXR1DDka6gHkYOo8KMfBs22WHgpx9tRXoWs2oybEAETvv3VXZ4kvrQdGlK+iSFJbDjZkJJ0JIAk/5oZUtPH4hr3hkazeR9lLgRd6VAWXUICgpZhegB9KCK6UGlKEt3XVWITmykz3bUgYTx7cKWELZQsmEiOrr3zNND+PRouzWTEwAkjyM0CzghicbUe9uZgBjdlM8+190aQXVFSIaWEkanSdNdNaiVhzS5CrUCDrGXX1UETitqZAbcbVIzhIIPrTRayvLaIauCDOxWTr35qXK4KmpUpOFmkf5Y9DCH3fBtksn5JSDM6SPLwrnOL4KWnFAAhIUQmQdRXXmFr3FwlRnYxHsoNxhbl5nNKOpKjHOAdKm+66Gy8RTFQMeZB4k28RK5O4iKqIGoopeUNQNami7OKZleAriRWVskVlKtjRZdlevHkiYB/wC+NVrnHyhIKkDXvoEviVWWCBNCcUxUugJiIrcKXEL5Oxr5umlPGCObZ9YNTI4sZO6VDyH+aT7TCFLSFA78qxzB3AJNTo2p89OYlPdnxBbE6mPEUWbxK1Oy0e6uYfkl4RHOt/iD6ZlJ0pDRHFM19LiuuM9AoaFJ8xWy7JlXYa5KWX0icpjtFRpvLjZIX5E1X1d3FWB9I8F1VzCmyd+6oHMNQOdcmexx9BguLBH7xqsrix6fnV+s03RPG9A4dj9APNdpPD7axKgKE4pwChwlYWUk8oEUiYd8IlykAZgod4rqPBuOKumStQEhUaeAP41S8VaYmVppUKbYgQuc4rhyreyvW1HUOW+vmquW3CzNdt+EEfIXv17b/wAq4g/vWmncT70CvplQKXWmevVVoaKuC9z14Y7B6q1ryKEpolW2MRdR6DziPqrWn3GiDXFF6Nrt4jsUsrHqXIoMlqnzhzhdDlotS0ytc9GeaY0SR/UD5UA3MVqw2DfXcQ21pQAcTXCvnAw7/EtrZXt6MH21MMaB9KztT9VDrf3bqR7KCLaKTG1ZmNJA4INpxYpmssTtMwz2JGu7dy6n2LC/fTh8Zw1SdU3KD3Fhf2kprlKXDI150bU4ctV1O8+K7Gy35Wvgn5E/qmFdjhqzpePN/wARjN7W11X41tUJ+JpbcDqBZthLmUpzDpXtcqtRSjbmVRrTtxDYy3ZfyaPvHqhtF1jp034iq0gE66xw7kHt+ELlxCFt261JckoKQSNCRrHo6g70IvsLW0rK4hSFdigUnx15d9OeF8QXjCEttvQhE5UlKSBMzuJ5mhGPXL106XXlZlQBoIAA2AHL/mpK1dRxOY52Ny8pnlZHPg9v32GXQ010gKgSJEzl7+W1HWeOkRkfahQBBTEiewc6H8BY4i0acbcjrLChoewAifKjznFNkTKg1ObNJAmeUEimF9y4GMwrqdV5qUjE2In9QqaeLbNU/JpTOqpEanflVxzHbJYGoB0IINSsP2NwFBLCHJOZYQkHXkTFYrh2xOY/FymRqYII8OzyqfJZB0OYTmHgfoFK0myJzJcjOJOs67c62Yw1rUhY30mNagRwzaED0k6a6kf9Ne/6ct/oPuJ788jv30pMxW3o8OR2Xu+bR9CrCsEbOoUn3UqcVWRa0RMbqg6eYqvjeH3bbigw4VI3EnU+ygjt5cJlt1R13nXSiZhb9mUMuJaWvBjd+nJD7qh6BrRG5OlUGxrSrv4r9oFdRXtetjSspVsaLIws1DNX3MPc16p0qr8TWZ02rqL5UHN4q7a42W0wBNSniQx1gDQpuxWr0Uk1s5gzoElOlCAkNOjN0WTxTH0a3VxfMgppfGGuEwEk+VbnAX//AIzQyhDoaA1PmjaeLhEFNe/6zQNOi07dJpcewV0CSgihrzBG9TKEwwtB2nqp8axDpXFLToDsKFqqVVREVIXQY0NblG5WmK7V8Ejg+LL1/Wf+IrhyXoo3w/xc/aZg2RCtwdp7arqszsyounUbl0X4QHR0N6P37b/zrir51p2fxdb9leLWZUp22J9bv+KRHDrUa3KI96BMwQolVoa3VWhqFXBa1M0moqlRSFXUxvVyytitaUjdRCR4kwK642tDIaZ7RlT/AEppG4Fsc72cjRsT/UdE/ifKpeJcVPxqUn5ogDxSZPt08qdpyjMvQ4OKFHpDvKHcYWPR3C9NFdcf1b+2aXlV0Hji3DjDdwnlH9qxI9seuueub0rhDisWPp5KpI0N1je48aNL9HzoI3uPGjS1dWqKit2aey9DbQwqug4/dANWX8mj712ubNHWmrigHo7H+Sa+9eoubcLNhMW+k9sDj6Jnwy5sShHSZwsTnjY6kg6DsgeVC8YcYDhDBUUQNVbk8+Q0pVswqd6MBsxSFy9Fg3VKhNSXb7EyNZ0RnCba3cSeld6NUgBOmoPPWo7zBbZSurcgjNEaTFLr7RqupRmoHQsOOpVqjj2yAd0C3kuk8I4YlhSy3dhOYRPVOgOxnnTMy+rPBukrJBITlER2mDrXM+FmgoqCmy6IGgjTXfWjzdk2lRKbdaNCCqYPgINMIN153F4N7X3dOl4bw75TxmdIEOtEd47fOvClYH6s9vKk1LSEgANujwJ8tjWqx1R88PAq/wA0kXTjDgU9f9o/9Ibx1xAoPdG31Cj0o2MjSlU3i3FZlmTtNWeJkI6TqlRP0p3odbCi42hdTAU2tykC/mrTtVW96tuVVb3pV063xBEWhpWVsxtWVF0mCycnMfbjb2VTaxdEnMIFAyDXi2VASUmO2ullC+QDDM0TDbY60gEBPsrP9TJ1kacqVlGtCakBN1SmdU3M8VoA9DWrX+sm9OofVSITWhNQsBU6lSKc8S4raWhQCTJBpJubgqrVRqM0YV9HDspaLQ1Gqt1Voai1hRGtTWyq0VSlMAjmHq/Mbv8AiW3vepcXTDh/6Fd/Xtve9S8ul4+9wRao1Voqt1VqaVWLxIqdpEmoxRHA7QuuJQPpKA8uZ9U0i10GZnBoT/w20LezLp3UCv8ABA93rqjguENPMrdcSVLCl6yR9EHke0mrPGl2G20Mp0nWP3U6Aev3Vtwor80d8V/YTVsdrLwC9QA3OKeuULMBh+0WwdwCkeeqD5GfVXObtEKIIjkfGm/hC+yvhBOjgy+e6fxHnQ3jix6O4UQNF9cefpe0GkN2grBjG9Jhw8atsluanVcmIqCspCJXHZUc2Y3qS2EkU78RtfJWX8k3949SVaelT3xF81Zfybf3jtVPW3AsBqNnn6IAwgA1cFVm6IMJ0FI0SYXrMMyRlCprFDnzrRe7TpQ9xqgRBVGLpnQKWxxJbRltRSSIMVbHEr4VmzzpGtDUt1o61FSVgqUcwlzQfkEV/wBTvc3fZUrfETxHpz5UsLoha26ghKzsqQPKiZWel0ReGljfBSXzhWorVuarMnWp39qhs2FLVCRrvQhX1SKbhGisLOlVm96O4VgL1wFdGE6aGTGvqrTE+G3bcBbkRMdUz+FQBLWxNLpRTzDNw3qG3GlZRnB+G3XWwtJSAe0mfYKyot/X8KzsuqNBHNHLa7YMzHsodjN+2UlKIq9dt26AJSn1CstBbKBUQnTuFdBfIAWjtQUopt1KkpSTUKkGuh2bjGXTL7K0ubi1nYbdlNKtGMIPwrnpbNaFk101FxZhI9AGrLN7anQJB05Jmjm5FA7QcP3D7+S5Ui0WowEknurFYc5E5TExMc66raXLKSopbOnPKaldxZmB8ivLv6B3okngl/Eak2YuSpwd0pKg2ogbmKhbwt1SsqUEnsiuwN4ojUhtQk+jlOum9Y3e5ur8XWCrUqgeVC/BD8Uqiez5riDzRBII1Bg+NRKFOHEGGOJWoqaUJJI05EmNqWb9hSTBEHT2iR76DguxRrioJV/Dv0G7+va+96l1dMOH/oV59e2+07S6uk4+9wWge/ErU1qK9Ua8FIVYNVtTx8HdhKlOkaJED6yt/Z76SGxJiun2X5pYZtlZc39a9E+rq+qiwXnguzsumDULzo0JS4sxHpLhZB0ScifBP/Mnzpj4QX+ZveK/uxXO7hZKqZ+H7a6Ww50K8qBOZOnWOXUDTsig03nvV2ExBfiHGCZlCGrkpWFA6ggjxGop04zZD1s3cJ5Qf6Vge4x66524ohVdF4RdD9othR1EgeCpKT5GajN44o4F/S56R3rm6hWCpr5opWQRBBIPiN6iFKuO4ZXEFT2vpCnniI/JWX8o3947SPbJ1p2x4Et2YAn8zb2H/wBjtUvXRwToqNnn6IK1RRo6VXtsLeOzTh8EKPuFeuAoJSoEEbgggjxB2pWHKV6nC12CbrS8XFUHLgdtGLPCXrmQyguZYzRynaZPdWr/AAPeHXooA7VpH40DcrnbR2lSpOIL2g8C4T6oVZgqlQGg3PZUlwNKZMK4cdQy6lRQCpKCJWnbMd+yvDwoszmfYEGPT7p7KEQs9HamHNMhzx7A+6TTbTRW5BTbNeKvxpja4WTEm6ZH9U1PiODNBtlBeRlKjKwdBoT2+VSVTVdRLmupm4PB3A8kguLolw4PlP6T+FFrvA7RKSfjUq10AFDsAbh0/VP4UwELPUxAqtdE24gj1XibtxuciymZnKSPdUmGIeunm2VOqOZUDMoqA0JJgnsFV329/OiPBQi9ZPer7KqAWzFuDWl7YkAnQbk+2nBC20wm8UnuAIH2qygeMWz9xePNtLV1QFRmUI0SNh417S3WNj65YC/ENBIBgsbNxKlawtpUA6nnqa3ew5lDagI1FeMYTBkuHXvr38kNlWUrPrror52XCfiKFYO0yVHOYimdk2ogKy6eFUHcDYbAUoyZ7ar3LVuhZzbZZj19lPEpajhUNiVcvLm2KoygpA3AqbCby3DhKRlGXmIqVhqySlMqTJHbV/4/ZgRma9lDNaIKzuIiACorXGmi4UxAPMiPfUV7xEg5kpRMbHSDW35atM0kp/ZFDMQxq1SU5ADlVJgaRzqBomYQbTkxkKnXxE4VJysE6HTt76iHFzgEBgydE779m2ter47t07IV2DQUOu+OWiE5WvRMiSPwqADe1WtoPP8AheZWYnxM8sgLtyE8xlJJInadqUb8uPKENK1AA0MaDtjsE1axzisvGQSkAQACee5oQ/jyzlgjqJyjQbb8+c6z3VDA0XWwuHcwTlAPeVLZn8yvPr2v2naW10xWLk2V59a1+27S4s1VNz73BdVi1NZWV6KVXtRThmx6Z9CORMn6o1V7BTb8Id7CUMp+ur3J/wDKo/g5tB8o7zEIHnqfwpjv+H2XllbmYkxzgaCBFWNaS229ejwuGcMLlbq70XH8pnamrh7iAsMLbyElRJQeQJAGvdoDTkjhW1H6ufFSv81YbwC2H6pPtPvNQU3BDD7Pq0XZmuuuQuMknamngZ0tvAHZYyHx3T7R7aehhlsn9U0PFKfxr0P2yPpNJ80CiKRBmVZQ2f0VTPmXPOPLDI+pQ2X1x47K9oJ86VQaeuP8RZcDYQoKIzSQZgGNJ8qRoqtwgmFydotaK5y71Ky5Bp8ucZeYRadC4pvNZtZspiYceifWaQG96dcTalFn/JtfeO1S9Lg2dLVawgEXsb7jxWyuKrw//wBL396x7lUFvsSWpRUokqOpUokknvJ3qz0FTW2FqdWENpKlGYSNzAk+wVSvQnC9G0lgDeJAAt3oYziLg9E5Z3gkT4xUL904d1KPiTTnbcB3CkBzIkAhJAJhUKMAxyq7cfBq6G1LLjcj6IJ3BgiYohcmviaAHaqiZ77/AClKWGPH4u/4I+0aptOqneuq4b8HCUIW2p+ekyiQmIjURJqa0+DhgKUHFrMEREDSATOnbRJWLDbTo0y5xcdZ0PABc5tgTzoviaCLZvxP4106y4ItEDVJV4q/xU2L4Dbm3UkNJACVZe1JjcUmcaLpVNu4dwbAdY8uBHHmuAvq1ojw984fqn8K3xDCylRB5Ub4Esx0yswn5NXvFOFXjXhrHO96hLr/ADq/wf8ApbXifcqo7tjU+J99WuFG4u2vE+5VQK7GPBpu/hPonfh1Q/KVx/DHvRWV7w4zOIXJ7EAevJ/ispFw8Q4Bwn8rf+IXP3MadIgq2qL8ouzOYz20TxTA0sqR1vSMGjthglvAzEHzrqSvOOr0WtBA1Sd8fdP0ia0eecUZVJNO99g1q3BUYB76v2rdkEZvk4HMxUzWlVHGsF2sXNEhcxrVprD3lCUhR8KcrrFLXpIAGUDQ99VsJ4lZbCs41zEgAbgmRT7lDiqpEtppbRgj51yqgmPOrjXCFwSBlOveKPvcatEfNcwRtuNagc+EAj0Wx3Sf+KUzwSdNi3aMhD08CvGM0Jkxqa9ufg7eEQtJJ8eysufhAdUI6g8BQ2543fP60jwilk8k7RjjwCix3g9Vu0VqWCofRA7wPxPqpScQRRe8x5xchS1KntJP/dqGvXE8qVxC6uHFUN/rLlEsO/Qrz61r9t2l9Ro9hx/Mr361r945QFVVnf73BahqtDWpreKuYThxfdS0CElRIk6gQCfwoK5lNz3BrdSpsIx163zBpUZokQCNNjrzq4rjC6P60+QSPwqKz4eUrp8/V6FKie9YBIT7CZrPyJ+afGJ16SI/ciM392lSSF0abcYxkAkAAmJ3DXzWq+Jbg7vr/uI91QLxd07rUfFRNXU2DaX2EqHUWhorEndaRmM9xM+VWmMGSLZ0KT8qFKKT+6yUpWPMrP8AbQVgo4pxILtJ3ncJ85gc5QJV6s86zpFkTrHbTdZWKBcOApGVKEW2g+ksBtSvHRwzW+F26kWygVAJSX+lb5r+TQkQOcHWeVGFcNn1Ce0/j5GEmvWjuTpCheTTrlJy67a7VUmmnGmx0DPyxnoWh0EKjn1p9H/1QNy00mlJAWLEYJzXkMvAvMfT63VVrennEVQ3Z/yjP23aRmRrTtjR+TtP5Rn7btJUR2aYrtd3+hVIOyaP8KYiLe5Q6pJUkTIETqCOfjSw0daYMFx9bAUEJbVmM5loCyNI0J2FUr0tXNVouZE5gRExY2N4MeBXW2bhTzSSWVDOEq9JtIOuaNDMeVTvJdUCMiBOmqirn2BNcnuOLrpakqLsFM5YSExOh2FVn+JblXpPun+tY91Rebd/Rys/VzR/qMeP6Ls4K91KQI7v8mqf5QZRJVcp13lbY2EaVzXBulfadSkKcUcukknc9tTt8FXivoBP1lAe6akBZ3bJpUQ5tWsBHIXsDxnfwXQTjVurqpudeeUz+BFRPOodSUJcWTBKdSAY7e2kdrCHLZakLgmBsZEedSP4g4yGnUjUFW+xG0GlhOMIwACi4ngecTwUON2p0VHcdKI8I4S6lxS1NkAoIBOnMVSxLiN15kyEgcwB2eNEOCcVeecKFrMBGm3aOyrNAlxGIrOw7mloETN5tO5KuJ2qkLUlQggmam4Ua/O2pHNX2VV0FfCrJJUtRUecnn5UuYdYpRehKQYSogE/VNEIVNoMqsc0flPojeDM5X7pcbrSme4IB/Gsqw5gzqXFrS+EBZBiOYAHb3VlLZcuoRUObONANDuAHBcjvr1bnpEmo2Lhz9o6d5pxODsLBIjQVUtW7dLgCfA+uuiuUMSzLAagr1y65AVJjYV5b2LqvRSoinL41bg7AmsZxVpE5QTJ5CjKo6y4CGsSw3w++oAhBg1et+C3lSDAjtNMKeJgISls+elTu4g+eslA7O2hLuSpfiq/IJcPArs5cyY7aocT8Hi3Y6QLJUCJ7NSB+NOSlXZTuBPlVDEcEfdSeldGUamTUHMhKzF1A8FzxA15rkLkioiaZeK8KSyUFBkLTP8A310sE0rl6SjVFVgc3evCa8JrwmvarJV4CNYYfzK98bX7xygBo5hn6Fe+Nr94ughpd597giAvJoxwmv8AOm/Ff3aqDEVNY3SmlpcRGZMxIkagj3E1Ar8PUFOq150BB8CE12WNF1BSR6Fq8Vn9tQQEhR78oA9dXQWf0Tr9IWOh+jkCyOmHfOYxSPbXC0TlVEpKT3pO4rZdwpSitSiVEyVTrPbNGV02bU7ADhJ39yZcXw93o0PgDIGGtcwBnKBoJnepncfR8ZaX9DIM45S6Cpz2q9lKRVWFVQTuSHaUOLmCJg3M6I61j6kNHo1lLjjilrI7IGUSe8rNTvcRJzpWlJ0cUtQMAELSgLTp2lK/WKAW1utww2hSz2ISVn1JBokjha8Ik260Dtdysj1ulNAmLEqr8SrAWPDy93WXmLIcQlAZAUkJSHMxKsqToI2r1aep5VuxgABHSXdojtAdLqh5MJWPbTN8Qw9COvdPOabNMhP+51Q91VPIWvCYh1QOc8E23D7D180gWqYNN+Pr6lp/KM/bdqp+UMObPVtHnT2u3AQP7WkfjVXFsX+MLQoNJaShtLSG0FRASkqI1USSesajliwjyKgA0H2WJRzrZLlbtLGWobdordSlO6iAPEmKpXpH1BSaHSiVrbqc0SJq09gziRJTp3U54XhDbLZK3B1CAuAT1vHyo0lpjrphSijLMwAc221TRYvxcPd2Gy0cjxA1+Y8UufB2+lkuqWQkQnVRgb06J4jaJ6pKj+4lSvwqi0ywyLhfxdBS2hK4/aOp50Eb48dWsNssIbE76q08oAponcvOYr+04h9VjTEjeBFh3nwTU4wHVZywokgel1fZNVsZw9PQlK0oQCPGKqXWI3PRhwqISrYiBW+JPlVq2omSpEknvii1q5tWq9hEHfaCTCA4ba2icyXHSqOQ/wCKN8P3Vklak27ZCgnVR7J7SZpJWyQ79Ye2ivD9o8h1aktkhSYk6DkedMWrW49JmLnm4nWB4WRK+4zVqENJHeST7BQgm5cPTFaUzqAK9Vw06fSUlPtNDsY6jiG8xMCo3RaXsoCoG0Y33gn1sorm/dUTmcUdeajWUOfdIJ8a8pZXXawRoE4I4feAOUL2/ZP+KxPDJHWU2sn6qv8AFPheWFrTkMJTmCtesd428tCTodKqt4lp1mHe+ATzG2gnn6vCm60eAXjuoj8x8ktMYWEpzdAv+xU+6oLZKkBX5q7MmPk19v1abBi6djbvCP3RuSABvrqR4bnQGMaxhJkhlYIiAREyCox/bHiR21OtHgEn4aw6k+SUXUvKIy2bu4MltQ94orbM3EmGVARIzAjX1UQc4nI1NuuAesYMBOvWSSkEiBOoFSO8RKSo/IOGACIE7gGPGTHZpU62TuCV2yWnigruHXqxB6omdATFUuI7G6FuofKrVpo2hURIEQB40fRxGVqgNubgZsugkgQddxOo5Qa0uMXc1+TUrQEDrSdR+7A01gmZERzo9bPAJ2bJAIM6cguQYlZ3jhGe1uTAgfIO7f20HvMJuEJK12z6Ep1KlNOJSB2klMAV2/485uWDG/pEmMqlCAE7ymIMekKFcW3BXh91KSkhvUGeYSTqQJ1kadlDrLnGIXUZRawQFxImtkkVFNeE1cmTFhiR8TvfG1+8XQVUDsFXcFxxVuHEhpl1LoQFJeSVpGQkpIAUNZPOaup4xuR80ttjuZZZa/3JRm9tC6KoW2DXDvzVu853paWoesCKunhS5T86ltgdrz7DX+1S83sqliGL3Dvztw85PJbi1D1ExQ4AdlC/v9VEd/IzCfncQtx3NJffPrCAn/dWdHh6d3Lt4/utssJ9aluH2UDrKk+/YURsYnaJ9CwCj2vPuuetLXRisPEjg+aZtWe9Fu0T/c6Fq9tBK2owChCK3HEt45oq6ej9kOKSn+1BA9lDV6mTqe06n11olXdUuapYaKxossaScwpmWx8nNL1qhSlAAE+AnQan2U+WmBvuMpUhlSknUKCTliSJk6DakevQbGLAypnIFt5hc4cEGpmVU6YT8H7z63UqW2yWnOjUFmTngKIGXuUnxmiLHCeHMtuLuL3OW1FJba0lQmE6gmSUnXaoSFwBXbTeYPgkFNydqO8JNFT6Fdikx4yKocQtsB9QtvmgEhJkkkhIzKM/vTTPwhdOMpSlBAzLBVomdSBEkTRay6TG41/QW3pvfs3XG3koQokvCOQIkyZOkUSXZFKn1KdbQFZNSZKcsTmA2mla7xJxSLrMtRCbkITqdBK9BRO5ZcWq7CG1KKg2EwN4iYNVubdV4KtFMZngfLnS4/Lw5pmvG0KauEhUlSAk6REjSqPDWFJbs3pAKiokmOwCPVWrzLrbVysgCW0ZdeaRrI5UW4OzLtFFUSSofhSmwWZ+c0yW/DI8csrXGmctu2jlpr5VGGUllpMSAmI9VWuLERbpPZA9kVthjZU03lj0ATPlUa7srM6g4tD5tP0lU0WQGyUjwFWmmKmv7YhtRLkEJJ0gba0vYJeyvUknvoyXBRlBgaX5rhG3bKd9KQ+JrYB8dwrpL/oa1z3iLMt/TwFRoJW3BV2Nqy7gUpXbfWPjXlGcV4ddQlK1EdY7dlZTZF2RtKmRIK6i24ZOtVlrPbWVlZlym6rQ1oqsrKicLWsrysoJgsrysrKiK9FCOM/0G4/hn3isrKLdQoVwV5OtRGsrK3lIFrWV5WUiKlRXvOsrKiiw1hrKyoisrKyspggpW96a8Dw1pSmMyAc5WFTJkAL9Ww27KysoFMNEdabDduktgJJt1qJAGqi9cpJPacqUjyqJ/Grg2wT0qoUTmAgTrm5d+te1lIF2tjMa4vzCUnO3rhWXC4rPOfPmObN+1m3nvqIuEmSZryspgudUEOst29x409YA0CtEj6Q99ZWURouXjdF0n8mMthSkNpBUvMoxMqlWuteXLyocEnQJ207OysrKzu1V+CaDqOH0VG69C7/ho9xovwdpZjxV7zWVlKdPBXYn+7nvb/1hQcdn82T9ZPuNVsOfUm3bIMfJD3VlZTs+Fcmv+wb/ABFA7y/cUVBSyRrpWvDvzorKyrkg/ZuTtd+h5Uh4r8+D3isrKRiGH+P5JkU2FpTnGbTnWVlZRCpBsv/Z',
// 		readingTime: 'XX min',
// 		author: {
// 			name: 'Roman Gascoin',
// 			href: '#',
// 			imageUrl: 'https://pbs.twimg.com/profile_images/1507113722808094726/fSJMd5Gs_400x400.png',
// 		},
// 	},
// 	{
// 		title: 'Prochainement',
// 		href: '#',
// 		category: { name: 'Article', href: '#' },
// 		description: 'Cet article est cours de rédaction',
// 		date: 'XXX XX, 20XX',
// 		datetime: '2020-03-16',
// 		imageUrl:
// 			'https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2021.2F05.2F25.2Fad371527-8ba9-41ff-8cd8-915f1162ee29.2Ejpeg/1200x630/cr/wqkgIEVkaSBOdWdyYWhhIGRlIFBpeGFiYXkgIC8gR0VP/trafic-dantiquites-le-louvre-sonne-lalarme-avec-une-exposition-inedite.jpg',
// 		readingTime: 'XX min',
// 		author: {
// 			name: 'Roman Gascoin',
// 			href: '#',
// 			imageUrl: 'https://pbs.twimg.com/profile_images/1507113722808094726/fSJMd5Gs_400x400.png',
// 		},
// 	},
// 	{
// 		title: 'Prochainement',
// 		href: '#',
// 		category: { name: 'Article', href: '#' },
// 		description: 'Cet article est cours de rédaction',
// 		date: 'XXX XX, 20XX',
// 		datetime: '2020-03-16',
// 		imageUrl:
// 			'data:image/jpeg;base64,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',
// 		readingTime: 'XX min',
// 		author: {
// 			name: 'Roman Gascoin',
// 			href: '#',
// 			imageUrl: 'https://pbs.twimg.com/profile_images/1507113722808094726/fSJMd5Gs_400x400.png',
// 		},
// 	},
// ];

import Link from 'next/link';
import { postsList } from '../../../lib/notion';

interface Props {
	posts: [any];
}

const ProjectsList: NextPage<Props> = (props: any) => {
	console.log(props);
	return (
		<div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
			<div className="absolute inset-0">
				<div className="bg-white h-1/3 sm:h-2/3" />
			</div>
			<div className="relative max-w-7xl mx-auto">
				<div className="text-center">
					<h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
						Découvrez mes projets
					</h2>
					<p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
						De mes essaies sur des techniques et languages à mes prestations professionnelles
					</p>
				</div>
				<div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
					{props.posts &&
						props.posts.map((result: any, index: any) => {
							return (
								<div key={index}>
									<div>
										<Link href={`/posts/${result.id}`}>
											<a>{result.properties.Name.title[0].plain_text}</a>
										</Link>
									</div>
								</div>
							);
						})}

					{/*{posts.map((post) => (*/}
					{/*	<div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">*/}
					{/*		<div className="flex-shrink-0">*/}
					{/*			<img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />*/}
					{/*		</div>*/}
					{/*		<div className="flex-1 bg-white p-6 flex flex-col justify-between">*/}
					{/*			<div className="flex-1">*/}
					{/*				<p className="text-sm font-medium text-indigo-600">*/}
					{/*					<a href={post.category.href} className="hover:underline">*/}
					{/*						{post.category.name}*/}
					{/*					</a>*/}
					{/*				</p>*/}
					{/*				<a href={post.href} className="block mt-2">*/}
					{/*					<p className="text-xl font-semibold text-gray-900">{post.title}</p>*/}
					{/*					<p className="mt-3 text-base text-gray-500">{post.description}</p>*/}
					{/*				</a>*/}
					{/*			</div>*/}
					{/*			<div className="mt-6 flex items-center">*/}
					{/*				<div className="flex-shrink-0">*/}
					{/*					<a href={post.author.href}>*/}
					{/*						<span className="sr-only">{post.author.name}</span>*/}
					{/*						<img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />*/}
					{/*					</a>*/}
					{/*				</div>*/}
					{/*				<div className="ml-3">*/}
					{/*					<p className="text-sm font-medium text-gray-900">*/}
					{/*						<a href={post.author.href} className="hover:underline">*/}
					{/*							{post.author.name}*/}
					{/*						</a>*/}
					{/*					</p>*/}
					{/*					<div className="flex space-x-1 text-sm text-gray-500">*/}
					{/*						<time dateTime={post.datetime}>{post.date}</time>*/}
					{/*						<span aria-hidden="true">&middot;</span>*/}
					{/*						<span>{post.readingTime} read</span>*/}
					{/*					</div>*/}
					{/*				</div>*/}
					{/*			</div>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*))}*/}
				</div>
			</div>
		</div>
	);
};

export async function getServerSideProps() {
	// Get the posts
	const { results } = await postsList();
	console.log(results);
	// Return the result
	return {
		props: {
			posts: results,
		},
	};
}

export default ProjectsList;
