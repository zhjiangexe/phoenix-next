// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'


const list = [
    {
        id: 1,
        profile_pic_url: 'https://picsum.photos/250/250?random=1',
        username: 'rockman',
        media_count: 2,
        has_audio: true,
        items: [
            {
                id: 1,
                media_type: 1,
                image_versions: [
                    {
                        "width": 640,
                        "height": 1136,
                        "url": "https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/e15/274197031_257471266541964_2057623231815445806_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=4hmO23MlFe8AX_Wv_lS&edm=ALlQn9MBAAAA&ccb=7-4&ig_cache_key=Mjc3NjQ1MDE3NzU1OTYxMjc3NQ%3D%3D.2-ccb7-4&oh=00_AT9V5pswXY47eHVxAPuvOnRuRuWO9jOFKJ7GxBJuKdKXNw&oe=62130A22&_nc_sid=48a2a6"
                    }
                ]
            },
            {
                id: 2,
                media_type: 2,
                image_versions: [
                    {
                        "width": 640,
                        "height": 1136,
                        "url": "https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/e15/274197031_257471266541964_2057623231815445806_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=4hmO23MlFe8AX_Wv_lS&edm=ALlQn9MBAAAA&ccb=7-4&ig_cache_key=Mjc3NjQ1MDE3NzU1OTYxMjc3NQ%3D%3D.2-ccb7-4&oh=00_AT9V5pswXY47eHVxAPuvOnRuRuWO9jOFKJ7GxBJuKdKXNw&oe=62130A22&_nc_sid=48a2a6"
                    }
                ],
                video_versions: [
                    {
                        "type": 101,
                        "width": 720,
                        "height": 1280,
                        "url": "https://instagram.ftpe7-2.fna.fbcdn.net/o1/v/t16/f1/m51/364E1534A94DE665E636E5967A5CADAB_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uNzIwLnN0b3J5LmJhc2VsaW5lIn0&_nc_ht=instagram.ftpe7-2.fna.fbcdn.net&_nc_cat=109&vs=3164290730455750_189282220&_nc_vs=HBksFQIYRGlnX3hwdl9wZXJtYW5lbnQvMzY0RTE1MzRBOTRERTY2NUU2MzZFNTk2N0E1Q0FEQUJfdmlkZW9fZGFzaGluaXQubXA0FQACyAEAFQAYJEdJZjlWeEFMRW16cE9xNEJBSVRnS0VQZGx5TXlicGt3QUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJsb%2Fu63Gp%2BI%2FFQIoAkMzLBdAK2ZmZmZmZhgSZGFzaF9iYXNlbGluZV8xX3YxEQB16AcA&_nc_rid=54637c948d&ccb=9-4&oe=62136D2D&oh=00_AT9rOwnyGePCu05NEyYW-AEX-JoxK1kZ-WncPEtlJcDAZA&_nc_sid=48a2a6",
                        "id": "3164290730455750v"
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        profile_pic_url: 'https://picsum.photos/250/250?random=2',
        username: 'tsuki',
        media_count: 2,
        has_audio: true,
        items: [
            {
                id: 1,
                media_type: 1,
                image_versions: [
                    {
                        "width": 640,
                        "height": 1136,
                        "url": "https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/e15/274197031_257471266541964_2057623231815445806_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=4hmO23MlFe8AX_Wv_lS&edm=ALlQn9MBAAAA&ccb=7-4&ig_cache_key=Mjc3NjQ1MDE3NzU1OTYxMjc3NQ%3D%3D.2-ccb7-4&oh=00_AT9V5pswXY47eHVxAPuvOnRuRuWO9jOFKJ7GxBJuKdKXNw&oe=62130A22&_nc_sid=48a2a6"
                    }
                ]
            },
            {
                id: 2,
                media_type: 2,
                image_versions: [
                    {
                        "width": 640,
                        "height": 1136,
                        "url": "https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/e15/274197031_257471266541964_2057623231815445806_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=4hmO23MlFe8AX_Wv_lS&edm=ALlQn9MBAAAA&ccb=7-4&ig_cache_key=Mjc3NjQ1MDE3NzU1OTYxMjc3NQ%3D%3D.2-ccb7-4&oh=00_AT9V5pswXY47eHVxAPuvOnRuRuWO9jOFKJ7GxBJuKdKXNw&oe=62130A22&_nc_sid=48a2a6"
                    }
                ],
                video_versions: [
                    {
                        "type": 101,
                        "width": 720,
                        "height": 1280,
                        "url": "https://instagram.ftpe7-2.fna.fbcdn.net/o1/v/t16/f1/m51/364E1534A94DE665E636E5967A5CADAB_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uNzIwLnN0b3J5LmJhc2VsaW5lIn0&_nc_ht=instagram.ftpe7-2.fna.fbcdn.net&_nc_cat=109&vs=3164290730455750_189282220&_nc_vs=HBksFQIYRGlnX3hwdl9wZXJtYW5lbnQvMzY0RTE1MzRBOTRERTY2NUU2MzZFNTk2N0E1Q0FEQUJfdmlkZW9fZGFzaGluaXQubXA0FQACyAEAFQAYJEdJZjlWeEFMRW16cE9xNEJBSVRnS0VQZGx5TXlicGt3QUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJsb%2Fu63Gp%2BI%2FFQIoAkMzLBdAK2ZmZmZmZhgSZGFzaF9iYXNlbGluZV8xX3YxEQB16AcA&_nc_rid=54637c948d&ccb=9-4&oe=62136D2D&oh=00_AT9rOwnyGePCu05NEyYW-AEX-JoxK1kZ-WncPEtlJcDAZA&_nc_sid=48a2a6",
                        "id": "3164290730455750v"
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        profile_pic_url: 'https://picsum.photos/250/250?random=3',
        username: 'tsuki',
        media_count: 2,
        has_audio: true,
        items: [
            {
                id: 1,
                media_type: 1,
                image_versions: [
                    {
                        "width": 640,
                        "height": 1136,
                        "url": "https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/e15/274197031_257471266541964_2057623231815445806_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=4hmO23MlFe8AX_Wv_lS&edm=ALlQn9MBAAAA&ccb=7-4&ig_cache_key=Mjc3NjQ1MDE3NzU1OTYxMjc3NQ%3D%3D.2-ccb7-4&oh=00_AT9V5pswXY47eHVxAPuvOnRuRuWO9jOFKJ7GxBJuKdKXNw&oe=62130A22&_nc_sid=48a2a6"
                    }
                ]
            },
            {
                id: 2,
                media_type: 2,
                image_versions: [
                    {
                        "width": 640,
                        "height": 1136,
                        "url": "https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/e15/274197031_257471266541964_2057623231815445806_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=4hmO23MlFe8AX_Wv_lS&edm=ALlQn9MBAAAA&ccb=7-4&ig_cache_key=Mjc3NjQ1MDE3NzU1OTYxMjc3NQ%3D%3D.2-ccb7-4&oh=00_AT9V5pswXY47eHVxAPuvOnRuRuWO9jOFKJ7GxBJuKdKXNw&oe=62130A22&_nc_sid=48a2a6"
                    }
                ],
                video_versions: [
                    {
                        "type": 101,
                        "width": 720,
                        "height": 1280,
                        "url": "https://instagram.ftpe7-2.fna.fbcdn.net/o1/v/t16/f1/m51/364E1534A94DE665E636E5967A5CADAB_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uNzIwLnN0b3J5LmJhc2VsaW5lIn0&_nc_ht=instagram.ftpe7-2.fna.fbcdn.net&_nc_cat=109&vs=3164290730455750_189282220&_nc_vs=HBksFQIYRGlnX3hwdl9wZXJtYW5lbnQvMzY0RTE1MzRBOTRERTY2NUU2MzZFNTk2N0E1Q0FEQUJfdmlkZW9fZGFzaGluaXQubXA0FQACyAEAFQAYJEdJZjlWeEFMRW16cE9xNEJBSVRnS0VQZGx5TXlicGt3QUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJsb%2Fu63Gp%2BI%2FFQIoAkMzLBdAK2ZmZmZmZhgSZGFzaF9iYXNlbGluZV8xX3YxEQB16AcA&_nc_rid=54637c948d&ccb=9-4&oe=62136D2D&oh=00_AT9rOwnyGePCu05NEyYW-AEX-JoxK1kZ-WncPEtlJcDAZA&_nc_sid=48a2a6",
                        "id": "3164290730455750v"
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        profile_pic_url: 'https://picsum.photos/250/250?random=4',
        username: 'kay',
        media_count: 2,
        has_audio: true,
        items: [
            {
                id: 1,
                media_type: 1,
                image_versions: [
                    {
                        "width": 640,
                        "height": 1136,
                        "url": "https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/e15/274197031_257471266541964_2057623231815445806_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=4hmO23MlFe8AX_Wv_lS&edm=ALlQn9MBAAAA&ccb=7-4&ig_cache_key=Mjc3NjQ1MDE3NzU1OTYxMjc3NQ%3D%3D.2-ccb7-4&oh=00_AT9V5pswXY47eHVxAPuvOnRuRuWO9jOFKJ7GxBJuKdKXNw&oe=62130A22&_nc_sid=48a2a6"
                    }
                ]
            },
            {
                id: 2,
                media_type: 2,
                image_versions: [
                    {
                        "width": 640,
                        "height": 1136,
                        "url": "https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/e15/274197031_257471266541964_2057623231815445806_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=4hmO23MlFe8AX_Wv_lS&edm=ALlQn9MBAAAA&ccb=7-4&ig_cache_key=Mjc3NjQ1MDE3NzU1OTYxMjc3NQ%3D%3D.2-ccb7-4&oh=00_AT9V5pswXY47eHVxAPuvOnRuRuWO9jOFKJ7GxBJuKdKXNw&oe=62130A22&_nc_sid=48a2a6"
                    }
                ],
                video_versions: [
                    {
                        "type": 101,
                        "width": 720,
                        "height": 1280,
                        "url": "https://instagram.ftpe7-2.fna.fbcdn.net/o1/v/t16/f1/m51/364E1534A94DE665E636E5967A5CADAB_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uNzIwLnN0b3J5LmJhc2VsaW5lIn0&_nc_ht=instagram.ftpe7-2.fna.fbcdn.net&_nc_cat=109&vs=3164290730455750_189282220&_nc_vs=HBksFQIYRGlnX3hwdl9wZXJtYW5lbnQvMzY0RTE1MzRBOTRERTY2NUU2MzZFNTk2N0E1Q0FEQUJfdmlkZW9fZGFzaGluaXQubXA0FQACyAEAFQAYJEdJZjlWeEFMRW16cE9xNEJBSVRnS0VQZGx5TXlicGt3QUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJsb%2Fu63Gp%2BI%2FFQIoAkMzLBdAK2ZmZmZmZhgSZGFzaF9iYXNlbGluZV8xX3YxEQB16AcA&_nc_rid=54637c948d&ccb=9-4&oe=62136D2D&oh=00_AT9rOwnyGePCu05NEyYW-AEX-JoxK1kZ-WncPEtlJcDAZA&_nc_sid=48a2a6",
                        "id": "3164290730455750v"
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        profile_pic_url: 'https://picsum.photos/250/250?random=5',
        username: 'rockman',
        media_count: 2,
        has_audio: true,
        items: [
            {
                id: 1,
                media_type: 1,
                image_versions: [
                    {
                        "width": 640,
                        "height": 1136,
                        "url": "https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/e15/274197031_257471266541964_2057623231815445806_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=4hmO23MlFe8AX_Wv_lS&edm=ALlQn9MBAAAA&ccb=7-4&ig_cache_key=Mjc3NjQ1MDE3NzU1OTYxMjc3NQ%3D%3D.2-ccb7-4&oh=00_AT9V5pswXY47eHVxAPuvOnRuRuWO9jOFKJ7GxBJuKdKXNw&oe=62130A22&_nc_sid=48a2a6"
                    }
                ]
            },
            {
                id: 2,
                media_type: 2,
                image_versions: [
                    {
                        "width": 640,
                        "height": 1136,
                        "url": "https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/e15/274197031_257471266541964_2057623231815445806_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=4hmO23MlFe8AX_Wv_lS&edm=ALlQn9MBAAAA&ccb=7-4&ig_cache_key=Mjc3NjQ1MDE3NzU1OTYxMjc3NQ%3D%3D.2-ccb7-4&oh=00_AT9V5pswXY47eHVxAPuvOnRuRuWO9jOFKJ7GxBJuKdKXNw&oe=62130A22&_nc_sid=48a2a6"
                    }
                ],
                video_versions: [
                    {
                        "type": 101,
                        "width": 720,
                        "height": 1280,
                        "url": "https://instagram.ftpe7-2.fna.fbcdn.net/o1/v/t16/f1/m51/364E1534A94DE665E636E5967A5CADAB_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uNzIwLnN0b3J5LmJhc2VsaW5lIn0&_nc_ht=instagram.ftpe7-2.fna.fbcdn.net&_nc_cat=109&vs=3164290730455750_189282220&_nc_vs=HBksFQIYRGlnX3hwdl9wZXJtYW5lbnQvMzY0RTE1MzRBOTRERTY2NUU2MzZFNTk2N0E1Q0FEQUJfdmlkZW9fZGFzaGluaXQubXA0FQACyAEAFQAYJEdJZjlWeEFMRW16cE9xNEJBSVRnS0VQZGx5TXlicGt3QUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJsb%2Fu63Gp%2BI%2FFQIoAkMzLBdAK2ZmZmZmZhgSZGFzaF9iYXNlbGluZV8xX3YxEQB16AcA&_nc_rid=54637c948d&ccb=9-4&oe=62136D2D&oh=00_AT9rOwnyGePCu05NEyYW-AEX-JoxK1kZ-WncPEtlJcDAZA&_nc_sid=48a2a6",
                        "id": "3164290730455750v"
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        profile_pic_url: 'https://picsum.photos/250/250?random=6',
        username: 'tsuki',
        media_count: 2,
        has_audio: true,
        items: [
            {
                id: 1,
                media_type: 1,
                image_versions: [
                    {
                        "width": 640,
                        "height": 1136,
                        "url": "https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/e15/274197031_257471266541964_2057623231815445806_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=4hmO23MlFe8AX_Wv_lS&edm=ALlQn9MBAAAA&ccb=7-4&ig_cache_key=Mjc3NjQ1MDE3NzU1OTYxMjc3NQ%3D%3D.2-ccb7-4&oh=00_AT9V5pswXY47eHVxAPuvOnRuRuWO9jOFKJ7GxBJuKdKXNw&oe=62130A22&_nc_sid=48a2a6"
                    }
                ]
            },
            {
                id: 2,
                media_type: 2,
                image_versions: [
                    {
                        "width": 640,
                        "height": 1136,
                        "url": "https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/e15/274197031_257471266541964_2057623231815445806_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=4hmO23MlFe8AX_Wv_lS&edm=ALlQn9MBAAAA&ccb=7-4&ig_cache_key=Mjc3NjQ1MDE3NzU1OTYxMjc3NQ%3D%3D.2-ccb7-4&oh=00_AT9V5pswXY47eHVxAPuvOnRuRuWO9jOFKJ7GxBJuKdKXNw&oe=62130A22&_nc_sid=48a2a6"
                    }
                ],
                video_versions: [
                    {
                        "type": 101,
                        "width": 720,
                        "height": 1280,
                        "url": "https://instagram.ftpe7-2.fna.fbcdn.net/o1/v/t16/f1/m51/364E1534A94DE665E636E5967A5CADAB_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uNzIwLnN0b3J5LmJhc2VsaW5lIn0&_nc_ht=instagram.ftpe7-2.fna.fbcdn.net&_nc_cat=109&vs=3164290730455750_189282220&_nc_vs=HBksFQIYRGlnX3hwdl9wZXJtYW5lbnQvMzY0RTE1MzRBOTRERTY2NUU2MzZFNTk2N0E1Q0FEQUJfdmlkZW9fZGFzaGluaXQubXA0FQACyAEAFQAYJEdJZjlWeEFMRW16cE9xNEJBSVRnS0VQZGx5TXlicGt3QUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJsb%2Fu63Gp%2BI%2FFQIoAkMzLBdAK2ZmZmZmZhgSZGFzaF9iYXNlbGluZV8xX3YxEQB16AcA&_nc_rid=54637c948d&ccb=9-4&oe=62136D2D&oh=00_AT9rOwnyGePCu05NEyYW-AEX-JoxK1kZ-WncPEtlJcDAZA&_nc_sid=48a2a6",
                        "id": "3164290730455750v"
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        profile_pic_url: 'https://picsum.photos/250/250?random=7',
        username: 'tsuki',
        media_count: 2,
        has_audio: true,
        items: [
            {
                id: 1,
                media_type: 1,
                image_versions: [
                    {
                        "width": 640,
                        "height": 1136,
                        "url": "https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/e15/274197031_257471266541964_2057623231815445806_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=4hmO23MlFe8AX_Wv_lS&edm=ALlQn9MBAAAA&ccb=7-4&ig_cache_key=Mjc3NjQ1MDE3NzU1OTYxMjc3NQ%3D%3D.2-ccb7-4&oh=00_AT9V5pswXY47eHVxAPuvOnRuRuWO9jOFKJ7GxBJuKdKXNw&oe=62130A22&_nc_sid=48a2a6"
                    }
                ]
            },
            {
                id: 2,
                media_type: 2,
                image_versions: [
                    {
                        "width": 640,
                        "height": 1136,
                        "url": "https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/e15/274197031_257471266541964_2057623231815445806_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=4hmO23MlFe8AX_Wv_lS&edm=ALlQn9MBAAAA&ccb=7-4&ig_cache_key=Mjc3NjQ1MDE3NzU1OTYxMjc3NQ%3D%3D.2-ccb7-4&oh=00_AT9V5pswXY47eHVxAPuvOnRuRuWO9jOFKJ7GxBJuKdKXNw&oe=62130A22&_nc_sid=48a2a6"
                    }
                ],
                video_versions: [
                    {
                        "type": 101,
                        "width": 720,
                        "height": 1280,
                        "url": "https://instagram.ftpe7-2.fna.fbcdn.net/o1/v/t16/f1/m51/364E1534A94DE665E636E5967A5CADAB_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uNzIwLnN0b3J5LmJhc2VsaW5lIn0&_nc_ht=instagram.ftpe7-2.fna.fbcdn.net&_nc_cat=109&vs=3164290730455750_189282220&_nc_vs=HBksFQIYRGlnX3hwdl9wZXJtYW5lbnQvMzY0RTE1MzRBOTRERTY2NUU2MzZFNTk2N0E1Q0FEQUJfdmlkZW9fZGFzaGluaXQubXA0FQACyAEAFQAYJEdJZjlWeEFMRW16cE9xNEJBSVRnS0VQZGx5TXlicGt3QUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJsb%2Fu63Gp%2BI%2FFQIoAkMzLBdAK2ZmZmZmZhgSZGFzaF9iYXNlbGluZV8xX3YxEQB16AcA&_nc_rid=54637c948d&ccb=9-4&oe=62136D2D&oh=00_AT9rOwnyGePCu05NEyYW-AEX-JoxK1kZ-WncPEtlJcDAZA&_nc_sid=48a2a6",
                        "id": "3164290730455750v"
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        profile_pic_url: 'https://picsum.photos/250/250?random=8',
        username: 'kay',
        media_count: 2,
        has_audio: true,
        items: [
            {
                id: 1,
                media_type: 1,
                image_versions: [
                    {
                        "width": 640,
                        "height": 1136,
                        "url": "https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/e15/274197031_257471266541964_2057623231815445806_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=4hmO23MlFe8AX_Wv_lS&edm=ALlQn9MBAAAA&ccb=7-4&ig_cache_key=Mjc3NjQ1MDE3NzU1OTYxMjc3NQ%3D%3D.2-ccb7-4&oh=00_AT9V5pswXY47eHVxAPuvOnRuRuWO9jOFKJ7GxBJuKdKXNw&oe=62130A22&_nc_sid=48a2a6"
                    }
                ]
            },
            {
                id: 2,
                media_type: 2,
                image_versions: [
                    {
                        "width": 640,
                        "height": 1136,
                        "url": "https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/e15/274197031_257471266541964_2057623231815445806_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=4hmO23MlFe8AX_Wv_lS&edm=ALlQn9MBAAAA&ccb=7-4&ig_cache_key=Mjc3NjQ1MDE3NzU1OTYxMjc3NQ%3D%3D.2-ccb7-4&oh=00_AT9V5pswXY47eHVxAPuvOnRuRuWO9jOFKJ7GxBJuKdKXNw&oe=62130A22&_nc_sid=48a2a6"
                    }
                ],
                video_versions: [
                    {
                        "type": 101,
                        "width": 720,
                        "height": 1280,
                        "url": "https://instagram.ftpe7-2.fna.fbcdn.net/o1/v/t16/f1/m51/364E1534A94DE665E636E5967A5CADAB_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uNzIwLnN0b3J5LmJhc2VsaW5lIn0&_nc_ht=instagram.ftpe7-2.fna.fbcdn.net&_nc_cat=109&vs=3164290730455750_189282220&_nc_vs=HBksFQIYRGlnX3hwdl9wZXJtYW5lbnQvMzY0RTE1MzRBOTRERTY2NUU2MzZFNTk2N0E1Q0FEQUJfdmlkZW9fZGFzaGluaXQubXA0FQACyAEAFQAYJEdJZjlWeEFMRW16cE9xNEJBSVRnS0VQZGx5TXlicGt3QUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJsb%2Fu63Gp%2BI%2FFQIoAkMzLBdAK2ZmZmZmZhgSZGFzaF9iYXNlbGluZV8xX3YxEQB16AcA&_nc_rid=54637c948d&ccb=9-4&oe=62136D2D&oh=00_AT9rOwnyGePCu05NEyYW-AEX-JoxK1kZ-WncPEtlJcDAZA&_nc_sid=48a2a6",
                        "id": "3164290730455750v"
                    }
                ]
            }
        ]
    }
]
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json(list)
}
