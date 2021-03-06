import { default as Stats } from '../core/node_fs_stats';
import file_system = require('../core/file_system');
import file = require('../core/file');
import { FileFlag } from '../core/file_flag';
import { FileIndex } from '../generic/file_index';
export declare enum ExternalFileAttributeType {
    MSDOS = 0,
    AMIGA = 1,
    OPENVMS = 2,
    UNIX = 3,
    VM_CMS = 4,
    ATARI_ST = 5,
    OS2_HPFS = 6,
    MAC = 7,
    Z_SYSTEM = 8,
    CP_M = 9,
    NTFS = 10,
    MVS = 11,
    VSE = 12,
    ACORN_RISC = 13,
    VFAT = 14,
    ALT_MVS = 15,
    BEOS = 16,
    TANDEM = 17,
    OS_400 = 18,
    OSX = 19,
}
export declare enum CompressionMethod {
    STORED = 0,
    SHRUNK = 1,
    REDUCED_1 = 2,
    REDUCED_2 = 3,
    REDUCED_3 = 4,
    REDUCED_4 = 5,
    IMPLODE = 6,
    DEFLATE = 8,
    DEFLATE64 = 9,
    TERSE_OLD = 10,
    BZIP2 = 12,
    LZMA = 14,
    TERSE_NEW = 18,
    LZ77 = 19,
    WAVPACK = 97,
    PPMD = 98,
}
export declare class FileHeader {
    private data;
    constructor(data: NodeBuffer);
    versionNeeded(): number;
    flags(): number;
    compressionMethod(): CompressionMethod;
    lastModFileTime(): Date;
    rawLastModFileTime(): number;
    crc32(): number;
    fileNameLength(): number;
    extraFieldLength(): number;
    fileName(): string;
    extraField(): NodeBuffer;
    totalSize(): number;
    useUTF8(): boolean;
}
export declare class FileData {
    private header;
    private record;
    private data;
    constructor(header: FileHeader, record: CentralDirectory, data: NodeBuffer);
    decompress(): NodeBuffer;
    getHeader(): FileHeader;
    getRecord(): CentralDirectory;
    getRawData(): NodeBuffer;
}
export declare class DataDescriptor {
    private data;
    constructor(data: NodeBuffer);
    crc32(): number;
    compressedSize(): number;
    uncompressedSize(): number;
}
export declare class ArchiveExtraDataRecord {
    private data;
    constructor(data: NodeBuffer);
    length(): number;
    extraFieldData(): NodeBuffer;
}
export declare class DigitalSignature {
    private data;
    constructor(data: NodeBuffer);
    size(): number;
    signatureData(): NodeBuffer;
}
export declare class CentralDirectory {
    private zipData;
    private data;
    private _filename;
    constructor(zipData: NodeBuffer, data: NodeBuffer);
    versionMadeBy(): number;
    versionNeeded(): number;
    flag(): number;
    compressionMethod(): CompressionMethod;
    lastModFileTime(): Date;
    rawLastModFileTime(): number;
    crc32(): number;
    compressedSize(): number;
    uncompressedSize(): number;
    fileNameLength(): number;
    extraFieldLength(): number;
    fileCommentLength(): number;
    diskNumberStart(): number;
    internalAttributes(): number;
    externalAttributes(): number;
    headerRelativeOffset(): number;
    produceFilename(): string;
    fileName(): string;
    rawFileName(): NodeBuffer;
    extraField(): NodeBuffer;
    fileComment(): string;
    rawFileComment(): NodeBuffer;
    totalSize(): number;
    isDirectory(): boolean;
    isFile(): boolean;
    useUTF8(): boolean;
    isEncrypted(): boolean;
    getFileData(): FileData;
    getData(): NodeBuffer;
    getRawData(): NodeBuffer;
    getStats(): Stats;
}
export declare class EndOfCentralDirectory {
    private data;
    constructor(data: NodeBuffer);
    diskNumber(): number;
    cdDiskNumber(): number;
    cdDiskEntryCount(): number;
    cdTotalEntryCount(): number;
    cdSize(): number;
    cdOffset(): number;
    cdZipCommentLength(): number;
    cdZipComment(): string;
    rawCdZipComment(): NodeBuffer;
}
export declare class ZipTOC {
    index: FileIndex<CentralDirectory>;
    directoryEntries: CentralDirectory[];
    eocd: EndOfCentralDirectory;
    data: NodeBuffer;
    constructor(index: FileIndex<CentralDirectory>, directoryEntries: CentralDirectory[], eocd: EndOfCentralDirectory, data: NodeBuffer);
}
export default class ZipFS extends file_system.SynchronousFileSystem implements file_system.FileSystem {
    private input;
    private name;
    private _index;
    private _directoryEntries;
    private _eocd;
    private data;
    constructor(input: NodeBuffer | ZipTOC, name?: string);
    getName(): string;
    getCentralDirectoryEntry(path: string): CentralDirectory;
    getCentralDirectoryEntryAt(index: number): CentralDirectory;
    getNumberOfCentralDirectoryEntries(): number;
    getEndOfCentralDirectory(): EndOfCentralDirectory;
    static isAvailable(): boolean;
    diskSpace(path: string, cb: (total: number, free: number) => void): void;
    isReadOnly(): boolean;
    supportsLinks(): boolean;
    supportsProps(): boolean;
    supportsSynch(): boolean;
    statSync(path: string, isLstat: boolean): Stats;
    openSync(path: string, flags: FileFlag, mode: number): file.File;
    readdirSync(path: string): string[];
    readFileSync(fname: string, encoding: string, flag: FileFlag): any;
    private static getEOCD(data);
    private static addToIndex(cd, index);
    private static computeIndexResponsive(data, index, cdPtr, cdEnd, cb, cdEntries, eocd);
    static computeIndex(data: NodeBuffer, cb: (zipTOC: ZipTOC) => void): void;
    private populateIndex();
}
