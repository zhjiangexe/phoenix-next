import Link from "next/link";
import Image from "next/Image";
import Cate from "./[cate]";

export default function Profile() {

    const newVar = [{ro: "rock"}, {ro: "rock"}, {ro: "rock"}];
    return <div>
        <div>
            <div>
                <h3>PIC</h3>
            </div>
            <div>
                <div>
                    <h3>rocktsuki</h3>
                    <Link href="/profile/edit">
                        <a>rock</a>
                    </Link>
                    <button>settigns</button>
                </div>
                <div className="postCate">
                    <div><label htmlFor="">貼文</label></div>
                    <div><label htmlFor="">位粉絲</label></div>
                    <div><label htmlFor="">追蹤中</label></div>
                </div>
                <div>
                    姓名
                </div>
                <div>個人簡介</div>
            </div>
        </div>
        <div>
            <div className="postCate">
                <div><Link href="/profile">貼文</Link></div>
                <div><Link href="/profile/channel/">影片</Link></div>
                <div><Link href="/profile/saved/">我的珍藏</Link></div>
                <div><Link href="/profile/tagged">已標註</Link></div>
            </div>
            <div>
                <Cate />
            </div>
        </div>
    </div>
}
