(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{140:function(e,n,t){"use strict";t.r(n);var a=t(150);n.default={woot:"zh",getOptionDescriptions:function(e){return{yesno:{Y:"\u662f",N:"\u6ca1\u6709"},gender:{M:"\u7537",F:"\u5973"},country:a,languages:{en:"\u82f1\u8bed (English)",zh:"\u4e2d\u6587 (Chinese)",ru:"\u4fc4\u8bed (Russian)",fr:"\u6cd5\u56fd (French)",de:"\u5fb7\u8bed (German)"},phoneCodes:{1:"United States","1-C":"Canada",44:"United Kingdom",86:"China",47:"Norway",33:"France",356:"Malta"},cashFrom:{F:"Family",S:"Savings",I:"Investments",X:"Other sources"}}[e]||{}},translate:function(e){if(e.error)return e.path+" "+e.name+" "+e.error+(e.values?" ("+JSON.stringify(e.values)+")":"");var n=M[e];return n||("Gender"===e?"\u6027\u522b":e.endsWith("-gender")?"\u6027\u522b":e.endsWith("-firstName")?"\u540d\u5b57":e.endsWith("-lastName")?"\u59d3":e.endsWith("-country")?"\u56fd\u5bb6":e.endsWith("-zipCode")?"\u90ae\u653f\u7f16\u7801/\u90ae\u653f\u7f16\u7801":e.endsWith("-taxRef")?"\u7a0e\u53f7":e.endsWith("-destination")?"\u76ee\u7684\u5730":e.endsWith("-alternate")?"\u66ff\u4ee3\u76ee\u7684\u5730":e)}};var M={Continue:"\u7ee7\u7eed",Cancel:"\u53d6\u6d88","Change Language":"\u6539\u53d8\u8bed\u8a00","Select your language":"\u9009\u62e9\u4f60\u7684\u8bed\u8a00",personalRef:"\u8f93\u5165\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f","Home page title":"\u8fd9\u662f\u4e3b\u9875"}},150:function(e){e.exports={AL:"\u963f\u5c14\u5df4\u5c3c\u4e9a",DZ:"\u963f\u5c14\u53ca\u5229\u4e9a",AF:"\u963f\u5bcc\u6c57",AR:"\u963f\u6839\u5ef7",AE:"\u963f\u62c9\u4f2f\u8054\u5408\u914b\u957f\u56fd",AW:"\u963f\u9c81\u5df4",OM:"\u963f\u66fc",AZ:"\u963f\u585e\u62dc\u7586",AC:"\u963f\u68ee\u677e\u5c9b",EG:"\u57c3\u53ca",ET:"\u57c3\u585e\u4fc4\u6bd4\u4e9a",IE:"\u7231\u5c14\u5170",EE:"\u7231\u6c99\u5c3c\u4e9a",AD:"\u5b89\u9053\u5c14",AO:"\u5b89\u54e5\u62c9",AI:"\u5b89\u572d\u62c9",AG:"\u5b89\u63d0\u74dc\u548c\u5df4\u5e03\u8fbe",AT:"\u5965\u5730\u5229",AX:"\u5965\u5170\u7fa4\u5c9b",AU:"\u6fb3\u5927\u5229\u4e9a",BB:"\u5df4\u5df4\u591a\u65af",PG:"\u5df4\u5e03\u4e9a\u65b0\u51e0\u5185\u4e9a",BS:"\u5df4\u54c8\u9a6c",PK:"\u5df4\u57fa\u65af\u5766",PY:"\u5df4\u62c9\u572d",PS:"\u5df4\u52d2\u65af\u5766\u9886\u571f",BH:"\u5df4\u6797",PA:"\u5df4\u62ff\u9a6c",BR:"\u5df4\u897f",BY:"\u767d\u4fc4\u7f57\u65af",BM:"\u767e\u6155\u5927",BG:"\u4fdd\u52a0\u5229\u4e9a",MP:"\u5317\u9a6c\u91cc\u4e9a\u7eb3\u7fa4\u5c9b",BJ:"\u8d1d\u5b81",BE:"\u6bd4\u5229\u65f6",IS:"\u51b0\u5c9b",PR:"\u6ce2\u591a\u9ece\u5404",PL:"\u6ce2\u5170",BA:"\u6ce2\u65af\u5c3c\u4e9a\u548c\u9ed1\u585e\u54e5\u7ef4\u90a3",BO:"\u73bb\u5229\u7ef4\u4e9a",BZ:"\u4f2f\u5229\u5179",BW:"\u535a\u8328\u74e6\u7eb3",BT:"\u4e0d\u4e39",BF:"\u5e03\u57fa\u7eb3\u6cd5\u7d22",BI:"\u5e03\u9686\u8fea",KP:"\u671d\u9c9c",GQ:"\u8d64\u9053\u51e0\u5185\u4e9a",DK:"\u4e39\u9ea6",DE:"\u5fb7\u56fd",DG:"\u8fea\u6208\u52a0\u897f\u4e9a\u5c9b",TL:"\u4e1c\u5e1d\u6c76",TG:"\u591a\u54e5",DO:"\u591a\u7c73\u5c3c\u52a0\u5171\u548c\u56fd",DM:"\u591a\u7c73\u5c3c\u514b",RU:"\u4fc4\u7f57\u65af",EC:"\u5384\u74dc\u591a\u5c14",ER:"\u5384\u7acb\u7279\u91cc\u4e9a",FR:"\u6cd5\u56fd",FO:"\u6cd5\u7f57\u7fa4\u5c9b",PF:"\u6cd5\u5c5e\u6ce2\u5229\u5c3c\u897f\u4e9a",GF:"\u6cd5\u5c5e\u572d\u4e9a\u90a3",TF:"\u6cd5\u5c5e\u5357\u90e8\u9886\u5730",VA:"\u68b5\u8482\u5188",PH:"\u83f2\u5f8b\u5bbe",FJ:"\u6590\u6d4e",FI:"\u82ac\u5170",CV:"\u4f5b\u5f97\u89d2",FK:"\u798f\u514b\u5170\u7fa4\u5c9b",GM:"\u5188\u6bd4\u4e9a",CG:"\u521a\u679c\uff08\u5e03\uff09",CD:"\u521a\u679c\uff08\u91d1\uff09",CO:"\u54e5\u4f26\u6bd4\u4e9a",CR:"\u54e5\u65af\u8fbe\u9ece\u52a0",GG:"\u683c\u6069\u897f\u5c9b",GD:"\u683c\u6797\u7eb3\u8fbe",GL:"\u683c\u9675\u5170",GE:"\u683c\u9c81\u5409\u4e9a",CU:"\u53e4\u5df4",GP:"\u74dc\u5fb7\u7f57\u666e",GU:"\u5173\u5c9b",GY:"\u572d\u4e9a\u90a3",KZ:"\u54c8\u8428\u514b\u65af\u5766",HT:"\u6d77\u5730",KR:"\u97e9\u56fd",NL:"\u8377\u5170",BQ:"\u8377\u5c5e\u52a0\u52d2\u6bd4\u533a",SX:"\u8377\u5c5e\u5723\u9a6c\u4e01",ME:"\u9ed1\u5c71",HN:"\u6d2a\u90fd\u62c9\u65af",KI:"\u57fa\u91cc\u5df4\u65af",DJ:"\u5409\u5e03\u63d0",KG:"\u5409\u5c14\u5409\u65af\u65af\u5766",GN:"\u51e0\u5185\u4e9a",GW:"\u51e0\u5185\u4e9a\u6bd4\u7ecd",CA:"\u52a0\u62ff\u5927",GH:"\u52a0\u7eb3",IC:"\u52a0\u7eb3\u5229\u7fa4\u5c9b",GA:"\u52a0\u84ec",KH:"\u67ec\u57d4\u5be8",CZ:"\u6377\u514b",ZW:"\u6d25\u5df4\u5e03\u97e6",CM:"\u5580\u9ea6\u9686",QA:"\u5361\u5854\u5c14",KY:"\u5f00\u66fc\u7fa4\u5c9b",CC:"\u79d1\u79d1\u65af\uff08\u57fa\u6797\uff09\u7fa4\u5c9b",KM:"\u79d1\u6469\u7f57",XK:"\u79d1\u7d22\u6c83",CI:"\u79d1\u7279\u8fea\u74e6",KW:"\u79d1\u5a01\u7279",HR:"\u514b\u7f57\u5730\u4e9a",KE:"\u80af\u5c3c\u4e9a",CK:"\u5e93\u514b\u7fa4\u5c9b",CW:"\u5e93\u62c9\u7d22",LV:"\u62c9\u8131\u7ef4\u4e9a",LS:"\u83b1\u7d22\u6258",LA:"\u8001\u631d",LB:"\u9ece\u5df4\u5ae9",LT:"\u7acb\u9676\u5b9b",LR:"\u5229\u6bd4\u91cc\u4e9a",LY:"\u5229\u6bd4\u4e9a",UN:"\u8054\u5408\u56fd",LI:"\u5217\u652f\u6566\u58eb\u767b",RE:"\u7559\u5c3c\u6c6a",LU:"\u5362\u68ee\u5821",RW:"\u5362\u65fa\u8fbe",RO:"\u7f57\u9a6c\u5c3c\u4e9a",MG:"\u9a6c\u8fbe\u52a0\u65af\u52a0",IM:"\u9a6c\u6069\u5c9b",MV:"\u9a6c\u5c14\u4ee3\u592b",MT:"\u9a6c\u8033\u4ed6",MW:"\u9a6c\u62c9\u7ef4",MY:"\u9a6c\u6765\u897f\u4e9a",ML:"\u9a6c\u91cc",MK:"\u9a6c\u5176\u987f",MH:"\u9a6c\u7ecd\u5c14\u7fa4\u5c9b",MQ:"\u9a6c\u63d0\u5c3c\u514b",YT:"\u9a6c\u7ea6\u7279",MU:"\u6bdb\u91cc\u6c42\u65af",MR:"\u6bdb\u91cc\u5854\u5c3c\u4e9a",US:"\u7f8e\u56fd",UM:"\u7f8e\u56fd\u672c\u571f\u5916\u5c0f\u5c9b\u5c7f",AS:"\u7f8e\u5c5e\u8428\u6469\u4e9a",VI:"\u7f8e\u5c5e\u7ef4\u5c14\u4eac\u7fa4\u5c9b",MN:"\u8499\u53e4",MS:"\u8499\u7279\u585e\u62c9\u7279",BD:"\u5b5f\u52a0\u62c9\u56fd",PE:"\u79d8\u9c81",FM:"\u5bc6\u514b\u7f57\u5c3c\u897f\u4e9a",MM:"\u7f05\u7538",MD:"\u6469\u5c14\u591a\u74e6",MA:"\u6469\u6d1b\u54e5",MC:"\u6469\u7eb3\u54e5",MZ:"\u83ab\u6851\u6bd4\u514b",MX:"\u58a8\u897f\u54e5",NA:"\u7eb3\u7c73\u6bd4\u4e9a",ZA:"\u5357\u975e",AQ:"\u5357\u6781\u6d32",GS:"\u5357\u4e54\u6cbb\u4e9a\u548c\u5357\u6851\u5a01\u5947\u7fa4\u5c9b",SS:"\u5357\u82cf\u4e39",NR:"\u7459\u9c81",NI:"\u5c3c\u52a0\u62c9\u74dc",NP:"\u5c3c\u6cca\u5c14",NE:"\u5c3c\u65e5\u5c14",NG:"\u5c3c\u65e5\u5229\u4e9a",NU:"\u7ebd\u57c3",NO:"\u632a\u5a01",NF:"\u8bfa\u798f\u514b\u5c9b",PW:"\u5e15\u52b3",PN:"\u76ae\u7279\u51ef\u6069\u7fa4\u5c9b",PT:"\u8461\u8404\u7259",JP:"\u65e5\u672c",SE:"\u745e\u5178",CH:"\u745e\u58eb",SV:"\u8428\u5c14\u74e6\u591a",WS:"\u8428\u6469\u4e9a",RS:"\u585e\u5c14\u7ef4\u4e9a",SL:"\u585e\u62c9\u5229\u6602",SN:"\u585e\u5185\u52a0\u5c14",CY:"\u585e\u6d66\u8def\u65af",SC:"\u585e\u820c\u5c14",SA:"\u6c99\u7279\u963f\u62c9\u4f2f",BL:"\u5723\u5df4\u6cf0\u52d2\u7c73",CX:"\u5723\u8bde\u5c9b",ST:"\u5723\u591a\u7f8e\u548c\u666e\u6797\u897f\u6bd4",SH:"\u5723\u8d6b\u52d2\u62ff",KN:"\u5723\u57fa\u8328\u548c\u5c3c\u7ef4\u65af",LC:"\u5723\u5362\u897f\u4e9a",MF:"\u5723\u9a6c\u4e01\u5c9b",SM:"\u5723\u9a6c\u529b\u8bfa",PM:"\u5723\u76ae\u57c3\u5c14\u548c\u5bc6\u514b\u9686\u7fa4\u5c9b",VC:"\u5723\u6587\u68ee\u7279\u548c\u683c\u6797\u7eb3\u4e01\u65af",LK:"\u65af\u91cc\u5170\u5361",SK:"\u65af\u6d1b\u4f10\u514b",SI:"\u65af\u6d1b\u6587\u5c3c\u4e9a",SJ:"\u65af\u74e6\u5c14\u5df4\u548c\u626c\u9a6c\u5ef6",SZ:"\u65af\u5a01\u58eb\u5170",SD:"\u82cf\u4e39",SR:"\u82cf\u91cc\u5357",SB:"\u6240\u7f57\u95e8\u7fa4\u5c9b",SO:"\u7d22\u9a6c\u91cc",TJ:"\u5854\u5409\u514b\u65af\u5766",TW:"\u53f0\u6e7e",TH:"\u6cf0\u56fd",TZ:"\u5766\u6851\u5c3c\u4e9a",TO:"\u6c64\u52a0",TC:"\u7279\u514b\u65af\u548c\u51ef\u79d1\u65af\u7fa4\u5c9b",TA:"\u7279\u91cc\u65af\u5766-\u8fbe\u5e93\u5c3c\u4e9a\u7fa4\u5c9b",TT:"\u7279\u7acb\u5c3c\u8fbe\u548c\u591a\u5df4\u54e5",TN:"\u7a81\u5c3c\u65af",TV:"\u56fe\u74e6\u5362",TR:"\u571f\u8033\u5176",TM:"\u571f\u5e93\u66fc\u65af\u5766",TK:"\u6258\u514b\u52b3",WF:"\u74e6\u5229\u65af\u548c\u5bcc\u56fe\u7eb3",VU:"\u74e6\u52aa\u963f\u56fe",GT:"\u5371\u5730\u9a6c\u62c9",VE:"\u59d4\u5185\u745e\u62c9",BN:"\u6587\u83b1",UG:"\u4e4c\u5e72\u8fbe",UA:"\u4e4c\u514b\u5170",UY:"\u4e4c\u62c9\u572d",UZ:"\u4e4c\u5179\u522b\u514b\u65af\u5766",GR:"\u5e0c\u814a",ES:"\u897f\u73ed\u7259",EH:"\u897f\u6492\u54c8\u62c9",SG:"\u65b0\u52a0\u5761",NC:"\u65b0\u5580\u91cc\u591a\u5c3c\u4e9a",NZ:"\u65b0\u897f\u5170",HU:"\u5308\u7259\u5229",EA:"\u4f11\u8fbe\u53ca\u6885\u5229\u5229\u4e9a",SY:"\u53d9\u5229\u4e9a",JM:"\u7259\u4e70\u52a0",AM:"\u4e9a\u7f8e\u5c3c\u4e9a",YE:"\u4e5f\u95e8",IQ:"\u4f0a\u62c9\u514b",IR:"\u4f0a\u6717",IL:"\u4ee5\u8272\u5217",IT:"\u610f\u5927\u5229",IN:"\u5370\u5ea6",ID:"\u5370\u5ea6\u5c3c\u897f\u4e9a",GB:"\u82f1\u56fd",VG:"\u82f1\u5c5e\u7ef4\u5c14\u4eac\u7fa4\u5c9b",IO:"\u82f1\u5c5e\u5370\u5ea6\u6d0b\u9886\u5730",JO:"\u7ea6\u65e6",VN:"\u8d8a\u5357",ZM:"\u8d5e\u6bd4\u4e9a",JE:"\u6cfd\u897f\u5c9b",TD:"\u4e4d\u5f97",GI:"\u76f4\u5e03\u7f57\u9640",CL:"\u667a\u5229",CF:"\u4e2d\u975e\u5171\u548c\u56fd",CN:"\u4e2d\u56fd",MO:"\u4e2d\u56fd\u6fb3\u95e8\u7279\u522b\u884c\u653f\u533a",HK:"\u4e2d\u56fd\u9999\u6e2f\u7279\u522b\u884c\u653f\u533a",EZ:"Eurozone"}}}]);