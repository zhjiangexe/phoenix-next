import Image from 'next/image'

export default function Chat(){
    return <div>
        <div>
            <Image src={'https://fakeimg.pl/250x250/ff0000'} height={28} width={28} />
            <span>person</span>
            <span>|rock</span>
        </div>
        <div>
           <ul>
               <li>a:rock</li>
               <li>zero</li>
               <li>a:man</li>
           </ul>
        </div>
        <div className="chat">
            <input type="text"/>
            <div>
                PIC
            </div>
        </div>
    </div>
}