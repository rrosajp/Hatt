// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {selfupdate} from '../models';
import {main} from '../models';
import {variables} from '../models';

export function CheckForUpdate():Promise<selfupdate.Release>;

export function GetWebsitesWithCategories(arg1:Array<string>):Promise<Array<string>>;

export function GetWebsitesWithLogin():Promise<Array<main.website>>;

export function ReadCustomLists():Promise<Array<main.CustomList>>;

export function ReadUserSettings():Promise<variables.UserSettings>;

export function Search(arg1:string,arg2:Array<string>,arg3:Array<string>):Promise<Array<variables.ItemList>>;

export function SelfUpdate():Promise<boolean>;

export function UpdateCustomLists(arg1:Array<main.CustomList>):Promise<void>;

export function UpdateUserSettings(arg1:variables.UserSettings):Promise<void>;
