import { Comment } from './comment';

export class Notification {
    id: number;
    organization: string;
    repository: string;
    title: string;
    comments?: Comment[];
}
