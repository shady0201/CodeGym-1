interface IPost {
    id: string;
    title: string;
    body?: string;
}

function main() {
    let msg: string;
    let total: number = 100;
    let isProduction = true;
    let prices: Array<number> = [120, 88, 60];
    let languages: string[] = ['vi', 'en-us'];
    let now = new Date();
    let unknown: any;

    enum Direction {
        UP,
        DOWN,
        LEFT,
        RIGHT
    };

 
    isProduction = false;
    unknown = Direction.UP;
    unknown = 'changed';
    const post: IPost = {
        id: "1",
        title: "My First Post"
    };
    msg = '50';   

    function getPost(postId: string): IPost {
        // do something to retrieve post
        return {
            id: postId,
            title: 'Post Title',
            body: 'Post Body',
            extra: 'data'
        } as IPost;
    }
    console.log("Post:", post);
    const retrievedPost = getPost("2");
    console.log("Retrieved Post:", retrievedPost);
}

main();
