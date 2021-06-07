--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Drop databases (except postgres and template1)
--

DROP DATABASE directus;




--
-- Drop roles
--

DROP ROLE directus;


--
-- Roles
--

CREATE ROLE directus;
ALTER ROLE directus WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'md59f6b208e182c129d22db642a8f06745d';






--
-- Databases
--

--
-- Database "template1" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3 (Debian 13.3-1.pgdg100+1)
-- Dumped by pg_dump version 13.3 (Debian 13.3-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

UPDATE pg_catalog.pg_database SET datistemplate = false WHERE datname = 'template1';
DROP DATABASE template1;
--
-- Name: template1; Type: DATABASE; Schema: -; Owner: directus
--

CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE template1 OWNER TO directus;

\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: COMMENT; Schema: -; Owner: directus
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- Name: template1; Type: DATABASE PROPERTIES; Schema: -; Owner: directus
--

ALTER DATABASE template1 IS_TEMPLATE = true;


\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: ACL; Schema: -; Owner: directus
--

REVOKE CONNECT,TEMPORARY ON DATABASE template1 FROM PUBLIC;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;


--
-- PostgreSQL database dump complete
--

--
-- Database "directus" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3 (Debian 13.3-1.pgdg100+1)
-- Dumped by pg_dump version 13.3 (Debian 13.3-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: directus; Type: DATABASE; Schema: -; Owner: directus
--

CREATE DATABASE directus WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE directus OWNER TO directus;

\connect directus

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: directus_activity; Type: TABLE; Schema: public; Owner: directus
--

CREATE TABLE public.directus_activity (
    id integer NOT NULL,
    action character varying(45) NOT NULL,
    "user" uuid,
    "timestamp" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    ip character varying(50) NOT NULL,
    user_agent character varying(255),
    collection character varying(64) NOT NULL,
    item character varying(255) NOT NULL,
    comment text
);


ALTER TABLE public.directus_activity OWNER TO directus;

--
-- Name: directus_activity_id_seq; Type: SEQUENCE; Schema: public; Owner: directus
--

CREATE SEQUENCE public.directus_activity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.directus_activity_id_seq OWNER TO directus;

--
-- Name: directus_activity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: directus
--

ALTER SEQUENCE public.directus_activity_id_seq OWNED BY public.directus_activity.id;


--
-- Name: directus_collections; Type: TABLE; Schema: public; Owner: directus
--

CREATE TABLE public.directus_collections (
    collection character varying(64) NOT NULL,
    icon character varying(30),
    note text,
    display_template character varying(255),
    hidden boolean DEFAULT false NOT NULL,
    singleton boolean DEFAULT false NOT NULL,
    translations json,
    archive_field character varying(64),
    archive_app_filter boolean DEFAULT true NOT NULL,
    archive_value character varying(255),
    unarchive_value character varying(255),
    sort_field character varying(64),
    accountability character varying(255) DEFAULT 'all'::character varying
);


ALTER TABLE public.directus_collections OWNER TO directus;

--
-- Name: directus_fields; Type: TABLE; Schema: public; Owner: directus
--

CREATE TABLE public.directus_fields (
    id integer NOT NULL,
    collection character varying(64) NOT NULL,
    field character varying(64) NOT NULL,
    special character varying(64),
    interface character varying(64),
    options json,
    display character varying(64),
    display_options json,
    readonly boolean DEFAULT false NOT NULL,
    hidden boolean DEFAULT false NOT NULL,
    sort integer,
    width character varying(30) DEFAULT 'full'::character varying,
    "group" integer,
    translations json,
    note text
);


ALTER TABLE public.directus_fields OWNER TO directus;

--
-- Name: directus_fields_id_seq; Type: SEQUENCE; Schema: public; Owner: directus
--

CREATE SEQUENCE public.directus_fields_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.directus_fields_id_seq OWNER TO directus;

--
-- Name: directus_fields_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: directus
--

ALTER SEQUENCE public.directus_fields_id_seq OWNED BY public.directus_fields.id;


--
-- Name: directus_files; Type: TABLE; Schema: public; Owner: directus
--

CREATE TABLE public.directus_files (
    id uuid NOT NULL,
    storage character varying(255) NOT NULL,
    filename_disk character varying(255),
    filename_download character varying(255) NOT NULL,
    title character varying(255),
    type character varying(255),
    folder uuid,
    uploaded_by uuid,
    uploaded_on timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    modified_by uuid,
    modified_on timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    charset character varying(50),
    filesize integer,
    width integer,
    height integer,
    duration integer,
    embed character varying(200),
    description text,
    location text,
    tags text,
    metadata json
);


ALTER TABLE public.directus_files OWNER TO directus;

--
-- Name: directus_folders; Type: TABLE; Schema: public; Owner: directus
--

CREATE TABLE public.directus_folders (
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    parent uuid
);


ALTER TABLE public.directus_folders OWNER TO directus;

--
-- Name: directus_migrations; Type: TABLE; Schema: public; Owner: directus
--

CREATE TABLE public.directus_migrations (
    version character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    "timestamp" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.directus_migrations OWNER TO directus;

--
-- Name: directus_permissions; Type: TABLE; Schema: public; Owner: directus
--

CREATE TABLE public.directus_permissions (
    id integer NOT NULL,
    role uuid,
    collection character varying(64) NOT NULL,
    action character varying(10) NOT NULL,
    permissions json,
    validation json,
    presets json,
    fields text,
    "limit" integer
);


ALTER TABLE public.directus_permissions OWNER TO directus;

--
-- Name: directus_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: directus
--

CREATE SEQUENCE public.directus_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.directus_permissions_id_seq OWNER TO directus;

--
-- Name: directus_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: directus
--

ALTER SEQUENCE public.directus_permissions_id_seq OWNED BY public.directus_permissions.id;


--
-- Name: directus_presets; Type: TABLE; Schema: public; Owner: directus
--

CREATE TABLE public.directus_presets (
    id integer NOT NULL,
    bookmark character varying(255),
    "user" uuid,
    role uuid,
    collection character varying(64),
    search character varying(100),
    filters json,
    layout character varying(100) DEFAULT 'tabular'::character varying,
    layout_query json,
    layout_options json,
    refresh_interval integer
);


ALTER TABLE public.directus_presets OWNER TO directus;

--
-- Name: directus_presets_id_seq; Type: SEQUENCE; Schema: public; Owner: directus
--

CREATE SEQUENCE public.directus_presets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.directus_presets_id_seq OWNER TO directus;

--
-- Name: directus_presets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: directus
--

ALTER SEQUENCE public.directus_presets_id_seq OWNED BY public.directus_presets.id;


--
-- Name: directus_relations; Type: TABLE; Schema: public; Owner: directus
--

CREATE TABLE public.directus_relations (
    id integer NOT NULL,
    many_collection character varying(64) NOT NULL,
    many_field character varying(64) NOT NULL,
    many_primary character varying(64) NOT NULL,
    one_collection character varying(64),
    one_field character varying(64),
    one_primary character varying(64),
    one_collection_field character varying(64),
    one_allowed_collections text,
    junction_field character varying(64),
    sort_field character varying(255)
);


ALTER TABLE public.directus_relations OWNER TO directus;

--
-- Name: directus_relations_id_seq; Type: SEQUENCE; Schema: public; Owner: directus
--

CREATE SEQUENCE public.directus_relations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.directus_relations_id_seq OWNER TO directus;

--
-- Name: directus_relations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: directus
--

ALTER SEQUENCE public.directus_relations_id_seq OWNED BY public.directus_relations.id;


--
-- Name: directus_revisions; Type: TABLE; Schema: public; Owner: directus
--

CREATE TABLE public.directus_revisions (
    id integer NOT NULL,
    activity integer NOT NULL,
    collection character varying(64) NOT NULL,
    item character varying(255) NOT NULL,
    data json,
    delta json,
    parent integer
);


ALTER TABLE public.directus_revisions OWNER TO directus;

--
-- Name: directus_revisions_id_seq; Type: SEQUENCE; Schema: public; Owner: directus
--

CREATE SEQUENCE public.directus_revisions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.directus_revisions_id_seq OWNER TO directus;

--
-- Name: directus_revisions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: directus
--

ALTER SEQUENCE public.directus_revisions_id_seq OWNED BY public.directus_revisions.id;


--
-- Name: directus_roles; Type: TABLE; Schema: public; Owner: directus
--

CREATE TABLE public.directus_roles (
    id uuid NOT NULL,
    name character varying(100) NOT NULL,
    icon character varying(30) DEFAULT 'supervised_user_circle'::character varying NOT NULL,
    description text,
    ip_access text,
    enforce_tfa boolean DEFAULT false NOT NULL,
    module_list json,
    collection_list json,
    admin_access boolean DEFAULT false NOT NULL,
    app_access boolean DEFAULT true NOT NULL
);


ALTER TABLE public.directus_roles OWNER TO directus;

--
-- Name: directus_sessions; Type: TABLE; Schema: public; Owner: directus
--

CREATE TABLE public.directus_sessions (
    token character varying(64) NOT NULL,
    "user" uuid NOT NULL,
    expires timestamp with time zone NOT NULL,
    ip character varying(255),
    user_agent character varying(255)
);


ALTER TABLE public.directus_sessions OWNER TO directus;

--
-- Name: directus_settings; Type: TABLE; Schema: public; Owner: directus
--

CREATE TABLE public.directus_settings (
    id integer NOT NULL,
    project_name character varying(100) DEFAULT 'Directus'::character varying NOT NULL,
    project_url character varying(255),
    project_color character varying(10) DEFAULT '#00C897'::character varying,
    project_logo uuid,
    public_foreground uuid,
    public_background uuid,
    public_note text,
    auth_login_attempts integer DEFAULT 25,
    auth_password_policy character varying(100),
    storage_asset_transform character varying(7) DEFAULT 'all'::character varying,
    storage_asset_presets json,
    custom_css text
);


ALTER TABLE public.directus_settings OWNER TO directus;

--
-- Name: directus_settings_id_seq; Type: SEQUENCE; Schema: public; Owner: directus
--

CREATE SEQUENCE public.directus_settings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.directus_settings_id_seq OWNER TO directus;

--
-- Name: directus_settings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: directus
--

ALTER SEQUENCE public.directus_settings_id_seq OWNED BY public.directus_settings.id;


--
-- Name: directus_users; Type: TABLE; Schema: public; Owner: directus
--

CREATE TABLE public.directus_users (
    id uuid NOT NULL,
    first_name character varying(50),
    last_name character varying(50),
    email character varying(128) NOT NULL,
    password character varying(255),
    location character varying(255),
    title character varying(50),
    description text,
    tags json,
    avatar uuid,
    language character varying(8) DEFAULT 'en-US'::character varying,
    theme character varying(20) DEFAULT 'auto'::character varying,
    tfa_secret character varying(255),
    status character varying(16) DEFAULT 'active'::character varying NOT NULL,
    role uuid,
    token character varying(255),
    last_access timestamp with time zone,
    last_page character varying(255)
);


ALTER TABLE public.directus_users OWNER TO directus;

--
-- Name: directus_webhooks; Type: TABLE; Schema: public; Owner: directus
--

CREATE TABLE public.directus_webhooks (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    method character varying(10) DEFAULT 'POST'::character varying NOT NULL,
    url text,
    status character varying(10) DEFAULT 'active'::character varying NOT NULL,
    data boolean DEFAULT true NOT NULL,
    actions character varying(100) NOT NULL,
    collections text
);


ALTER TABLE public.directus_webhooks OWNER TO directus;

--
-- Name: directus_webhooks_id_seq; Type: SEQUENCE; Schema: public; Owner: directus
--

CREATE SEQUENCE public.directus_webhooks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.directus_webhooks_id_seq OWNER TO directus;

--
-- Name: directus_webhooks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: directus
--

ALTER SEQUENCE public.directus_webhooks_id_seq OWNED BY public.directus_webhooks.id;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: directus
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    status character varying(255) DEFAULT 'draft'::character varying NOT NULL,
    sort integer,
    user_created uuid,
    date_created timestamp with time zone,
    user_updated uuid,
    date_updated timestamp with time zone,
    description character varying(255),
    image uuid,
    title character varying(255),
    content text,
    date date,
    slug character varying(255)
);


ALTER TABLE public.posts OWNER TO directus;

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: directus
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.posts_id_seq OWNER TO directus;

--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: directus
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: directus_activity id; Type: DEFAULT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_activity ALTER COLUMN id SET DEFAULT nextval('public.directus_activity_id_seq'::regclass);


--
-- Name: directus_fields id; Type: DEFAULT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_fields ALTER COLUMN id SET DEFAULT nextval('public.directus_fields_id_seq'::regclass);


--
-- Name: directus_permissions id; Type: DEFAULT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_permissions ALTER COLUMN id SET DEFAULT nextval('public.directus_permissions_id_seq'::regclass);


--
-- Name: directus_presets id; Type: DEFAULT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_presets ALTER COLUMN id SET DEFAULT nextval('public.directus_presets_id_seq'::regclass);


--
-- Name: directus_relations id; Type: DEFAULT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_relations ALTER COLUMN id SET DEFAULT nextval('public.directus_relations_id_seq'::regclass);


--
-- Name: directus_revisions id; Type: DEFAULT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_revisions ALTER COLUMN id SET DEFAULT nextval('public.directus_revisions_id_seq'::regclass);


--
-- Name: directus_settings id; Type: DEFAULT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_settings ALTER COLUMN id SET DEFAULT nextval('public.directus_settings_id_seq'::regclass);


--
-- Name: directus_webhooks id; Type: DEFAULT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_webhooks ALTER COLUMN id SET DEFAULT nextval('public.directus_webhooks_id_seq'::regclass);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Data for Name: directus_activity; Type: TABLE DATA; Schema: public; Owner: directus
--

COPY public.directus_activity (id, action, "user", "timestamp", ip, user_agent, collection, item, comment) FROM stdin;
1	authenticate	34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf	2021-05-19 14:12:01.629925+00	::ffff:172.24.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_users	34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf	\N
2	create	34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf	2021-05-19 14:12:49.712311+00	172.24.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_collections	posts	\N
3	create	34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf	2021-05-19 14:12:49.712311+00	172.24.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	1	\N
4	create	34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf	2021-05-19 14:12:49.712311+00	172.24.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	2	\N
5	create	34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf	2021-05-19 14:12:49.712311+00	172.24.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	3	\N
6	create	34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf	2021-05-19 14:12:49.712311+00	172.24.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	4	\N
7	create	34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf	2021-05-19 14:12:49.712311+00	172.24.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	5	\N
8	create	34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf	2021-05-19 14:12:49.712311+00	172.24.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	6	\N
9	create	34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf	2021-05-19 14:12:49.712311+00	172.24.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	7	\N
10	create	34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf	2021-05-19 14:12:49.793386+00	172.24.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_relations	1	\N
11	create	34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf	2021-05-19 14:12:49.793386+00	172.24.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_relations	2	\N
12	create	34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf	2021-05-19 14:14:03.799661+00	172.24.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	8	\N
13	create	34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf	2021-05-19 14:16:06.003562+00	172.24.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	9	\N
14	create	34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf	2021-05-19 14:16:22.410581+00	172.24.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	posts	1	\N
15	update	34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf	2021-05-19 14:17:18.355147+00	172.24.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	9	\N
16	update	34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf	2021-05-19 14:17:39.113226+00	172.24.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	posts	1	\N
17	authenticate	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-19 14:23:21.168162+00	::ffff:172.26.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_users	ea19fca6-9bff-40be-bac4-da69c38a902e	\N
18	create	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-19 15:32:04.766736+00	172.26.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	10	\N
19	create	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-19 15:32:04.827604+00	172.26.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_relations	3	\N
20	create	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-19 15:32:15.731356+00	172.26.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_files	769f15eb-ab8a-4c68-b460-f2a79e204af3	\N
21	delete	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-19 15:32:35.942788+00	172.26.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_files	769f15eb-ab8a-4c68-b460-f2a79e204af3	\N
22	create	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:04:05.834096+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	11	\N
23	create	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:04:05.891613+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_relations	4	\N
24	create	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:04:53.251586+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	12	\N
25	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:04:57.682738+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	12	\N
26	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:04:57.687334+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	1	\N
27	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:04:57.691519+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	2	\N
28	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:04:57.695551+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	3	\N
29	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:04:57.701981+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	4	\N
30	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:04:57.706186+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	5	\N
31	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:04:57.709486+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	6	\N
32	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:04:57.713178+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	7	\N
33	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:04:57.71729+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	9	\N
34	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:04:57.723679+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	11	\N
35	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:04:59.261646+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	1	\N
36	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:04:59.264762+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	12	\N
37	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:04:59.2686+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	2	\N
38	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:04:59.272951+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	3	\N
39	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:04:59.277137+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	4	\N
40	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:04:59.280954+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	5	\N
41	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:04:59.285347+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	6	\N
42	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:04:59.28893+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	7	\N
43	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:04:59.293492+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	9	\N
44	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:04:59.297616+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	11	\N
45	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:01.00764+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	1	\N
46	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:01.013391+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	12	\N
47	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:01.018533+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	3	\N
48	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:01.024715+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	2	\N
49	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:01.029094+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	4	\N
50	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:01.033408+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	5	\N
51	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:01.037948+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	6	\N
52	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:01.042053+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	7	\N
53	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:01.045965+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	9	\N
54	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:01.049975+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	11	\N
55	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:04.121277+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	1	\N
56	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:04.125465+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	9	\N
57	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:04.129976+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	12	\N
58	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:04.135409+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	3	\N
59	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:04.142108+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	2	\N
60	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:04.147878+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	4	\N
61	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:04.152817+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	5	\N
62	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:04.157605+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	6	\N
63	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:04.161619+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	7	\N
64	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:04.165096+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	11	\N
65	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:05.458282+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	1	\N
66	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:05.460904+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	12	\N
67	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:05.463638+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	9	\N
68	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:05.471269+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	3	\N
69	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:05.475341+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	2	\N
70	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:05.478182+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	4	\N
71	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:05.481078+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	5	\N
72	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:05.483627+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	6	\N
73	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:05.486115+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	7	\N
74	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:05.489306+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	11	\N
75	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:09.737304+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	1	\N
76	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:09.740521+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	12	\N
77	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:09.743733+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	9	\N
78	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:09.746717+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	3	\N
79	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:09.749857+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	11	\N
80	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:09.753138+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	2	\N
81	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:09.757396+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	4	\N
82	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:09.760996+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	5	\N
83	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:09.764336+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	6	\N
84	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:09.767482+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	7	\N
85	create	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:31.538191+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	13	\N
86	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:05:46.444711+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	12	\N
87	create	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:07:28.940636+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_files	7bf712aa-60fa-4a68-8449-ee04cd7d0584	\N
88	create	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:08:05.529862+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_files	dd1b97dd-b289-4fc6-a61e-a6e925e88c38	\N
89	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:09:13.20953+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	posts	1	\N
90	create	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:10:12.986+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_files	d1770136-f052-4010-b949-9f5065ea0afd	\N
91	create	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:10:47.236878+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	posts	2	\N
92	create	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:26:31.520701+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_permissions	1	\N
93	create	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:30:01.768863+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_permissions	2	\N
94	delete	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:34:58.108008+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_roles	6e0a2126-4031-4b32-aad7-c85a699ea951	\N
95	create	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:07:15.752955+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	14	\N
96	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:07:20.331417+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	1	\N
97	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:07:20.335062+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	12	\N
98	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:07:20.339298+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	9	\N
99	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:07:20.342527+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	3	\N
100	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:07:20.346174+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	11	\N
101	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:07:20.351058+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	14	\N
102	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:07:20.355052+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	2	\N
103	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:07:20.361727+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	4	\N
104	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:07:20.36868+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	5	\N
105	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:07:20.378058+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	6	\N
106	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:07:20.384116+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	7	\N
107	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:07:20.386486+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	13	\N
108	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:07:40.511923+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	posts	1	\N
109	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:07:54.269413+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	posts	2	\N
110	create	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:24:31.514453+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	15	\N
111	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:24:59.614415+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	1	\N
112	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:24:59.618611+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	15	\N
113	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:24:59.622267+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	12	\N
114	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:24:59.625635+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	9	\N
115	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:24:59.629258+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	3	\N
116	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:24:59.632634+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	11	\N
117	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:24:59.636235+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	14	\N
118	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:24:59.640467+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	2	\N
119	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:24:59.643798+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	4	\N
120	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:24:59.647099+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	5	\N
121	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:24:59.650735+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	6	\N
122	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:24:59.653927+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	7	\N
123	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:24:59.657979+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	13	\N
137	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:25:36.039732+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	posts	1	\N
124	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:25:26.067527+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	1	\N
125	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:25:26.071174+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	12	\N
126	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:25:26.075387+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	15	\N
127	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:25:26.07906+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	9	\N
128	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:25:26.082408+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	3	\N
129	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:25:26.085816+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	11	\N
130	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:25:26.089127+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	14	\N
131	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:25:26.093878+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	2	\N
132	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:25:26.096905+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	4	\N
133	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:25:26.100381+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	5	\N
134	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:25:26.104018+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	6	\N
135	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:25:26.106974+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	7	\N
136	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:25:26.110227+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	directus_fields	13	\N
138	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 15:25:43.19576+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	posts	2	\N
139	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 16:39:18.945083+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	posts	1	\N
140	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 16:39:49.093142+00	172.20.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	posts	2	\N
141	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 16:44:43.894459+00	172.23.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36	posts	2	\N
142	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-26 08:00:53.328409+00	172.18.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36	posts	1	\N
143	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-26 08:57:33.229529+00	172.18.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36	posts	2	\N
144	update	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-26 08:57:46.919453+00	172.18.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36	posts	2	\N
\.


--
-- Data for Name: directus_collections; Type: TABLE DATA; Schema: public; Owner: directus
--

COPY public.directus_collections (collection, icon, note, display_template, hidden, singleton, translations, archive_field, archive_app_filter, archive_value, unarchive_value, sort_field, accountability) FROM stdin;
posts	\N	\N	\N	f	f	\N	status	t	archived	draft	sort	all
\.


--
-- Data for Name: directus_fields; Type: TABLE DATA; Schema: public; Owner: directus
--

COPY public.directus_fields (id, collection, field, special, interface, options, display, display_options, readonly, hidden, sort, width, "group", translations, note) FROM stdin;
1	posts	id	\N	input	\N	\N	\N	t	t	1	full	\N	\N	\N
12	posts	title	\N	input	{}	raw	\N	f	f	2	full	\N	\N	\N
15	posts	slug	\N	input	{"slug":true,"trim":true}	raw	\N	f	f	3	full	\N	\N	\N
9	posts	description	\N	input	{"placeholder":"Short description of content"}	formatted-value	\N	f	f	4	full	\N	\N	\N
3	posts	sort	\N	input	\N	\N	\N	f	t	5	full	\N	\N	\N
11	posts	image	\N	file-image	\N	image	\N	f	f	6	full	\N	[{"language":"en-US"}]	\N
14	posts	date	\N	datetime	{}	datetime	{"format":"short"}	f	f	7	full	\N	\N	\N
2	posts	status	\N	select-dropdown	{"choices":[{"text":"Published","value":"published"},{"text":"Draft","value":"draft"},{"text":"Archived","value":"archived"}]}	labels	{"showAsDot":true,"choices":[{"background":"#00C897","value":"published"},{"background":"#D3DAE4","value":"draft"},{"background":"#F7971C","value":"archived"}]}	f	f	8	full	\N	\N	\N
4	posts	user_created	user-created	select-dropdown-m2o	{"template":"{{avatar.$thumbnail}} {{first_name}} {{last_name}}"}	user	\N	t	t	9	half	\N	\N	\N
5	posts	date_created	date-created	datetime	\N	datetime	{"relative":true}	t	t	10	half	\N	\N	\N
6	posts	user_updated	user-updated	select-dropdown-m2o	{"template":"{{avatar.$thumbnail}} {{first_name}} {{last_name}}"}	user	\N	t	t	11	half	\N	\N	\N
7	posts	date_updated	date-updated	datetime	\N	datetime	{"relative":true}	t	t	12	half	\N	\N	\N
13	posts	content	\N	input-rich-text-md	\N	formatted-value	\N	f	f	13	full	\N	\N	\N
\.


--
-- Data for Name: directus_files; Type: TABLE DATA; Schema: public; Owner: directus
--

COPY public.directus_files (id, storage, filename_disk, filename_download, title, type, folder, uploaded_by, uploaded_on, modified_by, modified_on, charset, filesize, width, height, duration, embed, description, location, tags, metadata) FROM stdin;
7bf712aa-60fa-4a68-8449-ee04cd7d0584	local	7bf712aa-60fa-4a68-8449-ee04cd7d0584.jpeg	photo-1496128858413-b36217c2ce36	Photo 1496128858413 B36217c2ce36	image/jpeg	\N	\N	2021-05-22 14:07:28.940636+00	\N	2021-05-22 14:07:29.643+00	\N	5906862	5438	3494	\N	\N	\N	\N	\N	{"icc":{"version":"2.1","intent":"Perceptual","cmm":"Lino","deviceClass":"Monitor","colorSpace":"RGB","connectionSpace":"XYZ","platform":"Microsoft","manufacturer":"IEC","model":"sRGB","creator":"HP","copyright":"Copyright (c) 1998 Hewlett-Packard C","description":"sRGB IEC61966-2.1","deviceModelDescription":"IEC 61966-2.1 Default RGB colour space - sRGB","viewingConditionsDescription":"Reference Viewing Condition in IEC61966-2.1"},"exif":{"image":{"Make":"Canon","Model":"Canon EOS 6D","XResolution":240,"YResolution":240,"ResolutionUnit":2,"Software":"Adobe Photoshop Lightroom 5.6 (Macintosh)","ModifyDate":"2017-05-19T17:34:41.000Z","ExifOffset":208},"thumbnail":{"Compression":6,"XResolution":72,"YResolution":72,"ResolutionUnit":2,"ThumbnailOffset":856,"ThumbnailLength":10133},"exif":{"ExposureTime":0.0125,"FNumber":2.8,"ExposureProgram":1,"ISO":100,"SensitivityType":2,"RecommendedExposureIndex":100,"ExifVersion":{"type":"Buffer","data":[48,50,51,48]},"DateTimeOriginal":"2017-02-22T17:42:42.000Z","DateTimeDigitized":"2017-02-22T17:42:42.000Z","ShutterSpeedValue":6.321928,"ApertureValue":2.970854,"ExposureBiasValue":0,"MaxApertureValue":1,"MeteringMode":2,"Flash":16,"FocalLength":35,"SubSecTimeOriginal":"36","SubSecTimeDigitized":"36","ColorSpace":1,"FocalPlaneXResolution":1520,"FocalPlaneYResolution":1520,"FocalPlaneResolutionUnit":3,"CustomRendered":0,"ExposureMode":1,"WhiteBalance":0,"SceneCaptureType":0,"BodySerialNumber":"372051002021","LensSpecification":[35,35,null,null],"LensModel":"EF35mm f/1.4L USM","LensSerialNumber":"0000000000"}},"iptc":{"dateCreated":"20170222"}}
dd1b97dd-b289-4fc6-a61e-a6e925e88c38	local	dd1b97dd-b289-4fc6-a61e-a6e925e88c38.jpeg	photo-1621682877540-edd7c9dae368	Photo 1621682877540 Edd7c9dae368	image/jpeg	\N	\N	2021-05-22 14:08:05.529862+00	\N	2021-05-22 14:08:05.602+00	\N	247604	1920	1375	\N	\N	\N	\N	\N	{"icc":{"version":"2.1","intent":"Perceptual","cmm":"lcms","deviceClass":"Monitor","colorSpace":"RGB","connectionSpace":"XYZ","platform":"Apple","creator":"lcms","description":"c2","copyright":""}}
d1770136-f052-4010-b949-9f5065ea0afd	local	d1770136-f052-4010-b949-9f5065ea0afd.jpeg	photo-1593642634443-44adaa06623a	Photo 1593642634443 44adaa06623a	image/jpeg	\N	\N	2021-05-22 14:10:12.986+00	\N	2021-05-22 14:10:13.058+00	\N	168653	1920	1536	\N	\N	\N	\N	\N	{"icc":{"version":"2.1","intent":"Perceptual","cmm":"lcms","deviceClass":"Monitor","colorSpace":"RGB","connectionSpace":"XYZ","platform":"Apple","creator":"lcms","description":"c2","copyright":""}}
\.


--
-- Data for Name: directus_folders; Type: TABLE DATA; Schema: public; Owner: directus
--

COPY public.directus_folders (id, name, parent) FROM stdin;
\.


--
-- Data for Name: directus_migrations; Type: TABLE DATA; Schema: public; Owner: directus
--

COPY public.directus_migrations (version, name, "timestamp") FROM stdin;
20201028A	Remove Collection Foreign Keys	2021-05-19 14:22:35.506388+00
20201029A	Remove System Relations	2021-05-19 14:22:35.508943+00
20201029B	Remove System Collections	2021-05-19 14:22:35.510992+00
20201029C	Remove System Fields	2021-05-19 14:22:35.520113+00
20201105A	Add Cascade System Relations	2021-05-19 14:22:35.546231+00
20201105B	Change Webhook URL Type	2021-05-19 14:22:35.549541+00
20210225A	Add Relations Sort Field	2021-05-19 14:22:35.552368+00
20210304A	Remove Locked Fields	2021-05-19 14:22:35.554561+00
20210312A	Webhooks Collections Text	2021-05-19 14:22:35.557827+00
20210331A	Add Refresh Interval	2021-05-19 14:22:35.559875+00
20210415A	Make Filesize Nullable	2021-05-19 14:22:35.563533+00
20210416A	Add Collections Accountability	2021-05-19 14:22:35.567034+00
20210422A	Remove Files Interface	2021-05-19 14:22:35.569044+00
20210506A	Rename Interfaces	2021-05-19 14:22:35.589407+00
\.


--
-- Data for Name: directus_permissions; Type: TABLE DATA; Schema: public; Owner: directus
--

COPY public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields, "limit") FROM stdin;
1	\N	posts	read	\N	\N	\N	*	\N
2	\N	directus_files	read	\N	\N	\N	*	\N
\.


--
-- Data for Name: directus_presets; Type: TABLE DATA; Schema: public; Owner: directus
--

COPY public.directus_presets (id, bookmark, "user", role, collection, search, filters, layout, layout_query, layout_options, refresh_interval) FROM stdin;
3	\N	ea19fca6-9bff-40be-bac4-da69c38a902e	\N	posts	\N	[{"key":"hide-archived","field":"status","operator":"neq","value":"archived","locked":true}]	tabular	{"tabular":{"fields":["image","title","description","slug","content","date_updated"]}}	{"tabular":{"widths":{"image":102.727294921875,"title":211.81817626953125,"description":290},"spacing":"comfortable"},"cards":{"title":"{{title}}","subtitle":"{{slug}}"}}	10
1	\N	ea19fca6-9bff-40be-bac4-da69c38a902e	\N	directus_files	\N	\N	cards	{"cards":{"sort":"-uploaded_on","page":1}}	{"cards":{"icon":"insert_drive_file","title":"{{ title }}","subtitle":"{{ type }} • {{ filesize }}","size":4,"imageFit":"crop"}}	\N
2	\N	ea19fca6-9bff-40be-bac4-da69c38a902e	\N	directus_users	\N	\N	cards	{"cards":{"sort":"email","page":1}}	{"cards":{"icon":"account_circle","title":"{{ first_name }} {{ last_name }}","subtitle":"{{ email }}","size":4}}	\N
\.


--
-- Data for Name: directus_relations; Type: TABLE DATA; Schema: public; Owner: directus
--

COPY public.directus_relations (id, many_collection, many_field, many_primary, one_collection, one_field, one_primary, one_collection_field, one_allowed_collections, junction_field, sort_field) FROM stdin;
1	posts	user_created	id	directus_users	\N	id	\N	\N	\N	\N
2	posts	user_updated	id	directus_users	\N	id	\N	\N	\N	\N
4	posts	image	id	directus_files	\N	id	\N	\N	\N	\N
\.


--
-- Data for Name: directus_revisions; Type: TABLE DATA; Schema: public; Owner: directus
--

COPY public.directus_revisions (id, activity, collection, item, data, delta, parent) FROM stdin;
1	14	posts	1	{"status":"published","description":"Test description","id":1}	{"status":"published","description":"Test description","id":1}	\N
2	16	posts	1	{"id":1,"status":"published","sort":null,"user_created":"34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf","date_created":"2021-05-19T14:16:22Z","user_updated":"34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf","date_updated":"2021-05-19T14:17:39Z","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium."}	{"description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.","user_updated":"34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf","date_updated":"2021-05-19T14:17:39.113Z"}	\N
3	89	posts	1	{"id":1,"status":"published","sort":null,"user_created":"34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf","date_created":"2021-05-19T14:16:22Z","user_updated":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_updated":"2021-05-22T14:09:13Z","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.","image":"dd1b97dd-b289-4fc6-a61e-a6e925e88c38","title":"A post about dogs","content":"# Tristis paravi hac\\n\\n## Monstroque Plura mihi tuae adcommodat quem referebat\\n\\nLorem markdownum **summam bracchiaque iactum**; dixit, sic in ferrataque nec ore\\ngaudeat. In obiecta Ilion sui fumo onerosus ignara: doles male casuque species\\net cruorem. Aurorae cupit, in dubitat et cauda essem perdere languida illinc\\neiusdem sterilis se decus meque senior aurum, tot.\\n\\n- Non videre dedit\\n- Duabus casus plures pomis legit cervice pennisque\\n- Exstat quas\\n- Concretaque videri eatque hederarum tuisque\\n- Foedat mora umbras Partheniumque admovet adfusaque medio\\n\\n## Adversos duros tamquam altissimus\\n\\nNunc vetitum hinc, discedite observo, annis, exhalarunt laetos oras mihi cervice\\nillis inpediit. Denique verbisque, validum nubigenas enim Coroneus; dat videre\\npuerum; hunc [ipsae](http://aquarumfecit.net/verique.php) roboris quaerit tota\\nquos. Trepidamque neque illo nocte et voce nec terra vellera flamma, inplet spem\\ntum ostia. Tuus quo usu ossibus turba supervenit redit ulterius; non deus\\nincaluit. Sacro fuit vires, tantummodo ipse mollescat.\\n\\nPabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox\\nsignificat, [oneri ruinas](http://milite-signaverat.com/) urbis, praeferret!\\nNatisque inplet vera ut mori edentem exspectatas secretaque utque Somnus peregit\\ncorpora!\\n\\n> *Rerum* est Echecli qui sperata sub et credi nomenque hortatibus petiere fagus\\n> ducitur. Fratres *et sit et*, Dolopum, est Danais fumant nec quis desuetudine\\n> inque paruerit aspexit.\\n\\n## Ad Phasias Pallas quae Nilus extemplo meritis\\n\\nEquarum **acrior**. Et arte septem dilapsa numen dives in enses vestigia puppe\\nintravit sermone laniataque paterque. Utque sui percaluit speciem vos terris\\nexcussit misero protectum discedit mille Alemone etiam orandus vehebat. Enim\\nfrustra. Gerunt in servat Sidone victa ut Orchomenon pericula sanguine caput\\nalimenta.\\n\\nNocti concita. Rubens quam, Proteus ad sprevere summa sonitu metaque et sororum,\\nPhrygiae, Duxerat praesens **si**. Veteres in cernenda creatus atris. Medio\\nretemptat umoribus unum ponit *perde*, anum ubi pelle, et *salici albis*, eram\\npotest *amore* grando: veretur? Duros et honore conveniunt illis nec exemplo\\nquoque: pressa.\\n\\nPlures saepe solitaque sors sui navis ad siquid cunctaque quibus amplexus\\nnurusque at spectavit enim Tiresiae, nec annis. Cedit mirantur, animae est,\\nnobis: tellus exserere victore penates, fallunt **tu oblitis serpentum**;\\ncapillis. Erat dum medio spectata tulisti, *est agri suos* melior sublime et\\nsenta facies, erubuit [memorabile](http://fores.net/leucada.html), inde?"}	{"image":"dd1b97dd-b289-4fc6-a61e-a6e925e88c38","title":"A post about dogs","content":"# Tristis paravi hac\\n\\n## Monstroque Plura mihi tuae adcommodat quem referebat\\n\\nLorem markdownum **summam bracchiaque iactum**; dixit, sic in ferrataque nec ore\\ngaudeat. In obiecta Ilion sui fumo onerosus ignara: doles male casuque species\\net cruorem. Aurorae cupit, in dubitat et cauda essem perdere languida illinc\\neiusdem sterilis se decus meque senior aurum, tot.\\n\\n- Non videre dedit\\n- Duabus casus plures pomis legit cervice pennisque\\n- Exstat quas\\n- Concretaque videri eatque hederarum tuisque\\n- Foedat mora umbras Partheniumque admovet adfusaque medio\\n\\n## Adversos duros tamquam altissimus\\n\\nNunc vetitum hinc, discedite observo, annis, exhalarunt laetos oras mihi cervice\\nillis inpediit. Denique verbisque, validum nubigenas enim Coroneus; dat videre\\npuerum; hunc [ipsae](http://aquarumfecit.net/verique.php) roboris quaerit tota\\nquos. Trepidamque neque illo nocte et voce nec terra vellera flamma, inplet spem\\ntum ostia. Tuus quo usu ossibus turba supervenit redit ulterius; non deus\\nincaluit. Sacro fuit vires, tantummodo ipse mollescat.\\n\\nPabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox\\nsignificat, [oneri ruinas](http://milite-signaverat.com/) urbis, praeferret!\\nNatisque inplet vera ut mori edentem exspectatas secretaque utque Somnus peregit\\ncorpora!\\n\\n> *Rerum* est Echecli qui sperata sub et credi nomenque hortatibus petiere fagus\\n> ducitur. Fratres *et sit et*, Dolopum, est Danais fumant nec quis desuetudine\\n> inque paruerit aspexit.\\n\\n## Ad Phasias Pallas quae Nilus extemplo meritis\\n\\nEquarum **acrior**. Et arte septem dilapsa numen dives in enses vestigia puppe\\nintravit sermone laniataque paterque. Utque sui percaluit speciem vos terris\\nexcussit misero protectum discedit mille Alemone etiam orandus vehebat. Enim\\nfrustra. Gerunt in servat Sidone victa ut Orchomenon pericula sanguine caput\\nalimenta.\\n\\nNocti concita. Rubens quam, Proteus ad sprevere summa sonitu metaque et sororum,\\nPhrygiae, Duxerat praesens **si**. Veteres in cernenda creatus atris. Medio\\nretemptat umoribus unum ponit *perde*, anum ubi pelle, et *salici albis*, eram\\npotest *amore* grando: veretur? Duros et honore conveniunt illis nec exemplo\\nquoque: pressa.\\n\\nPlures saepe solitaque sors sui navis ad siquid cunctaque quibus amplexus\\nnurusque at spectavit enim Tiresiae, nec annis. Cedit mirantur, animae est,\\nnobis: tellus exserere victore penates, fallunt **tu oblitis serpentum**;\\ncapillis. Erat dum medio spectata tulisti, *est agri suos* melior sublime et\\nsenta facies, erubuit [memorabile](http://fores.net/leucada.html), inde?","user_updated":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_updated":"2021-05-22T14:09:13.209Z"}	\N
4	91	posts	2	{"title":"Another post","content":"# Tristis paravi hac\\n\\n## Monstroque Plura mihi tuae adcommodat quem referebat\\n\\nLorem markdownum **summam bracchiaque iactum**; dixit, sic in ferrataque nec ore\\ngaudeat. In obiecta Ilion sui fumo onerosus ignara: doles male casuque species\\net cruorem. Aurorae cupit, in dubitat et cauda essem perdere languida illinc\\neiusdem sterilis se decus meque senior aurum, tot.\\n\\n- Non videre dedit\\n- Duabus casus plures pomis legit cervice pennisque\\n- Exstat quas\\n- Concretaque videri eatque hederarum tuisque\\n- Foedat mora umbras Partheniumque admovet adfusaque medio\\n\\n## Adversos duros tamquam altissimus\\n\\nNunc vetitum hinc, discedite observo, annis, exhalarunt laetos oras mihi cervice\\nillis inpediit. Denique verbisque, validum nubigenas enim Coroneus; dat videre\\npuerum; hunc [ipsae](http://aquarumfecit.net/verique.php) roboris quaerit tota\\nquos. Trepidamque neque illo nocte et voce nec terra vellera flamma, inplet spem\\ntum ostia. Tuus quo usu ossibus turba supervenit redit ulterius; non deus\\nincaluit. Sacro fuit vires, tantummodo ipse mollescat.\\n\\nPabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox\\nsignificat, [oneri ruinas](http://milite-signaverat.com/) urbis, praeferret!\\nNatisque inplet vera ut mori edentem exspectatas secretaque utque Somnus peregit\\ncorpora!\\n\\n> *Rerum* est Echecli qui sperata sub et credi nomenque hortatibus petiere fagus\\n> ducitur. Fratres *et sit et*, Dolopum, est Danais fumant nec quis desuetudine\\n> inque paruerit aspexit.\\n\\n## Ad Phasias Pallas quae Nilus extemplo meritis\\n\\nEquarum **acrior**. Et arte septem dilapsa numen dives in enses vestigia puppe\\nintravit sermone laniataque paterque. Utque sui percaluit speciem vos terris\\nexcussit misero protectum discedit mille Alemone etiam orandus vehebat. Enim\\nfrustra. Gerunt in servat Sidone victa ut Orchomenon pericula sanguine caput\\nalimenta.\\n\\nNocti concita. Rubens quam, Proteus ad sprevere summa sonitu metaque et sororum,\\nPhrygiae, Duxerat praesens **si**. Veteres in cernenda creatus atris. Medio\\nretemptat umoribus unum ponit *perde*, anum ubi pelle, et *salici albis*, eram\\npotest *amore* grando: veretur? Duros et honore conveniunt illis nec exemplo\\nquoque: pressa.\\n\\nPlures saepe solitaque sors sui navis ad siquid cunctaque quibus amplexus\\nnurusque at spectavit enim Tiresiae, nec annis. Cedit mirantur, animae est,\\nnobis: tellus exserere victore penates, fallunt **tu oblitis serpentum**;\\ncapillis. Erat dum medio spectata tulisti, *est agri suos* melior sublime et\\nsenta facies, erubuit [memorabile](http://fores.net/leucada.html), inde?","status":"published","image":"d1770136-f052-4010-b949-9f5065ea0afd","description":"Pabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox significat, urbis, praeferret!","id":2}	{"title":"Another post","content":"# Tristis paravi hac\\n\\n## Monstroque Plura mihi tuae adcommodat quem referebat\\n\\nLorem markdownum **summam bracchiaque iactum**; dixit, sic in ferrataque nec ore\\ngaudeat. In obiecta Ilion sui fumo onerosus ignara: doles male casuque species\\net cruorem. Aurorae cupit, in dubitat et cauda essem perdere languida illinc\\neiusdem sterilis se decus meque senior aurum, tot.\\n\\n- Non videre dedit\\n- Duabus casus plures pomis legit cervice pennisque\\n- Exstat quas\\n- Concretaque videri eatque hederarum tuisque\\n- Foedat mora umbras Partheniumque admovet adfusaque medio\\n\\n## Adversos duros tamquam altissimus\\n\\nNunc vetitum hinc, discedite observo, annis, exhalarunt laetos oras mihi cervice\\nillis inpediit. Denique verbisque, validum nubigenas enim Coroneus; dat videre\\npuerum; hunc [ipsae](http://aquarumfecit.net/verique.php) roboris quaerit tota\\nquos. Trepidamque neque illo nocte et voce nec terra vellera flamma, inplet spem\\ntum ostia. Tuus quo usu ossibus turba supervenit redit ulterius; non deus\\nincaluit. Sacro fuit vires, tantummodo ipse mollescat.\\n\\nPabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox\\nsignificat, [oneri ruinas](http://milite-signaverat.com/) urbis, praeferret!\\nNatisque inplet vera ut mori edentem exspectatas secretaque utque Somnus peregit\\ncorpora!\\n\\n> *Rerum* est Echecli qui sperata sub et credi nomenque hortatibus petiere fagus\\n> ducitur. Fratres *et sit et*, Dolopum, est Danais fumant nec quis desuetudine\\n> inque paruerit aspexit.\\n\\n## Ad Phasias Pallas quae Nilus extemplo meritis\\n\\nEquarum **acrior**. Et arte septem dilapsa numen dives in enses vestigia puppe\\nintravit sermone laniataque paterque. Utque sui percaluit speciem vos terris\\nexcussit misero protectum discedit mille Alemone etiam orandus vehebat. Enim\\nfrustra. Gerunt in servat Sidone victa ut Orchomenon pericula sanguine caput\\nalimenta.\\n\\nNocti concita. Rubens quam, Proteus ad sprevere summa sonitu metaque et sororum,\\nPhrygiae, Duxerat praesens **si**. Veteres in cernenda creatus atris. Medio\\nretemptat umoribus unum ponit *perde*, anum ubi pelle, et *salici albis*, eram\\npotest *amore* grando: veretur? Duros et honore conveniunt illis nec exemplo\\nquoque: pressa.\\n\\nPlures saepe solitaque sors sui navis ad siquid cunctaque quibus amplexus\\nnurusque at spectavit enim Tiresiae, nec annis. Cedit mirantur, animae est,\\nnobis: tellus exserere victore penates, fallunt **tu oblitis serpentum**;\\ncapillis. Erat dum medio spectata tulisti, *est agri suos* melior sublime et\\nsenta facies, erubuit [memorabile](http://fores.net/leucada.html), inde?","status":"published","image":"d1770136-f052-4010-b949-9f5065ea0afd","description":"Pabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox significat, urbis, praeferret!","id":2}	\N
5	108	posts	1	{"id":1,"status":"published","sort":null,"user_created":"34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf","date_created":"2021-05-19T14:16:22Z","user_updated":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_updated":"2021-05-22T15:07:40Z","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.","image":"dd1b97dd-b289-4fc6-a61e-a6e925e88c38","title":"A post about dogs","content":"# Tristis paravi hac\\n\\n## Monstroque Plura mihi tuae adcommodat quem referebat\\n\\nLorem markdownum **summam bracchiaque iactum**; dixit, sic in ferrataque nec ore\\ngaudeat. In obiecta Ilion sui fumo onerosus ignara: doles male casuque species\\net cruorem. Aurorae cupit, in dubitat et cauda essem perdere languida illinc\\neiusdem sterilis se decus meque senior aurum, tot.\\n\\n- Non videre dedit\\n- Duabus casus plures pomis legit cervice pennisque\\n- Exstat quas\\n- Concretaque videri eatque hederarum tuisque\\n- Foedat mora umbras Partheniumque admovet adfusaque medio\\n\\n## Adversos duros tamquam altissimus\\n\\nNunc vetitum hinc, discedite observo, annis, exhalarunt laetos oras mihi cervice\\nillis inpediit. Denique verbisque, validum nubigenas enim Coroneus; dat videre\\npuerum; hunc [ipsae](http://aquarumfecit.net/verique.php) roboris quaerit tota\\nquos. Trepidamque neque illo nocte et voce nec terra vellera flamma, inplet spem\\ntum ostia. Tuus quo usu ossibus turba supervenit redit ulterius; non deus\\nincaluit. Sacro fuit vires, tantummodo ipse mollescat.\\n\\nPabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox\\nsignificat, [oneri ruinas](http://milite-signaverat.com/) urbis, praeferret!\\nNatisque inplet vera ut mori edentem exspectatas secretaque utque Somnus peregit\\ncorpora!\\n\\n> *Rerum* est Echecli qui sperata sub et credi nomenque hortatibus petiere fagus\\n> ducitur. Fratres *et sit et*, Dolopum, est Danais fumant nec quis desuetudine\\n> inque paruerit aspexit.\\n\\n## Ad Phasias Pallas quae Nilus extemplo meritis\\n\\nEquarum **acrior**. Et arte septem dilapsa numen dives in enses vestigia puppe\\nintravit sermone laniataque paterque. Utque sui percaluit speciem vos terris\\nexcussit misero protectum discedit mille Alemone etiam orandus vehebat. Enim\\nfrustra. Gerunt in servat Sidone victa ut Orchomenon pericula sanguine caput\\nalimenta.\\n\\nNocti concita. Rubens quam, Proteus ad sprevere summa sonitu metaque et sororum,\\nPhrygiae, Duxerat praesens **si**. Veteres in cernenda creatus atris. Medio\\nretemptat umoribus unum ponit *perde*, anum ubi pelle, et *salici albis*, eram\\npotest *amore* grando: veretur? Duros et honore conveniunt illis nec exemplo\\nquoque: pressa.\\n\\nPlures saepe solitaque sors sui navis ad siquid cunctaque quibus amplexus\\nnurusque at spectavit enim Tiresiae, nec annis. Cedit mirantur, animae est,\\nnobis: tellus exserere victore penates, fallunt **tu oblitis serpentum**;\\ncapillis. Erat dum medio spectata tulisti, *est agri suos* melior sublime et\\nsenta facies, erubuit [memorabile](http://fores.net/leucada.html), inde?","date":"2021-01-01"}	{"date":"2021-01-01T00:00:00.000Z","user_updated":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_updated":"2021-05-22T15:07:40.512Z"}	\N
6	109	posts	2	{"id":2,"status":"published","sort":null,"user_created":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_created":"2021-05-22T14:10:47Z","user_updated":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_updated":"2021-05-22T15:07:54Z","description":"Pabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox significat, urbis, praeferret!","image":"d1770136-f052-4010-b949-9f5065ea0afd","title":"Another post","content":"# Tristis paravi hac\\n\\n## Monstroque Plura mihi tuae adcommodat quem referebat\\n\\nLorem markdownum **summam bracchiaque iactum**; dixit, sic in ferrataque nec ore\\ngaudeat. In obiecta Ilion sui fumo onerosus ignara: doles male casuque species\\net cruorem. Aurorae cupit, in dubitat et cauda essem perdere languida illinc\\neiusdem sterilis se decus meque senior aurum, tot.\\n\\n- Non videre dedit\\n- Duabus casus plures pomis legit cervice pennisque\\n- Exstat quas\\n- Concretaque videri eatque hederarum tuisque\\n- Foedat mora umbras Partheniumque admovet adfusaque medio\\n\\n## Adversos duros tamquam altissimus\\n\\nNunc vetitum hinc, discedite observo, annis, exhalarunt laetos oras mihi cervice\\nillis inpediit. Denique verbisque, validum nubigenas enim Coroneus; dat videre\\npuerum; hunc [ipsae](http://aquarumfecit.net/verique.php) roboris quaerit tota\\nquos. Trepidamque neque illo nocte et voce nec terra vellera flamma, inplet spem\\ntum ostia. Tuus quo usu ossibus turba supervenit redit ulterius; non deus\\nincaluit. Sacro fuit vires, tantummodo ipse mollescat.\\n\\nPabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox\\nsignificat, [oneri ruinas](http://milite-signaverat.com/) urbis, praeferret!\\nNatisque inplet vera ut mori edentem exspectatas secretaque utque Somnus peregit\\ncorpora!\\n\\n> *Rerum* est Echecli qui sperata sub et credi nomenque hortatibus petiere fagus\\n> ducitur. Fratres *et sit et*, Dolopum, est Danais fumant nec quis desuetudine\\n> inque paruerit aspexit.\\n\\n## Ad Phasias Pallas quae Nilus extemplo meritis\\n\\nEquarum **acrior**. Et arte septem dilapsa numen dives in enses vestigia puppe\\nintravit sermone laniataque paterque. Utque sui percaluit speciem vos terris\\nexcussit misero protectum discedit mille Alemone etiam orandus vehebat. Enim\\nfrustra. Gerunt in servat Sidone victa ut Orchomenon pericula sanguine caput\\nalimenta.\\n\\nNocti concita. Rubens quam, Proteus ad sprevere summa sonitu metaque et sororum,\\nPhrygiae, Duxerat praesens **si**. Veteres in cernenda creatus atris. Medio\\nretemptat umoribus unum ponit *perde*, anum ubi pelle, et *salici albis*, eram\\npotest *amore* grando: veretur? Duros et honore conveniunt illis nec exemplo\\nquoque: pressa.\\n\\nPlures saepe solitaque sors sui navis ad siquid cunctaque quibus amplexus\\nnurusque at spectavit enim Tiresiae, nec annis. Cedit mirantur, animae est,\\nnobis: tellus exserere victore penates, fallunt **tu oblitis serpentum**;\\ncapillis. Erat dum medio spectata tulisti, *est agri suos* melior sublime et\\nsenta facies, erubuit [memorabile](http://fores.net/leucada.html), inde?","date":"2021-05-22"}	{"date":"2021-05-22T00:00:00.000Z","user_updated":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_updated":"2021-05-22T15:07:54.271Z"}	\N
7	137	posts	1	{"id":1,"status":"published","sort":null,"user_created":"34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf","date_created":"2021-05-19T14:16:22Z","user_updated":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_updated":"2021-05-22T15:25:36Z","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.","image":"dd1b97dd-b289-4fc6-a61e-a6e925e88c38","title":"A post about dogs","content":"# Tristis paravi hac\\n\\n## Monstroque Plura mihi tuae adcommodat quem referebat\\n\\nLorem markdownum **summam bracchiaque iactum**; dixit, sic in ferrataque nec ore\\ngaudeat. In obiecta Ilion sui fumo onerosus ignara: doles male casuque species\\net cruorem. Aurorae cupit, in dubitat et cauda essem perdere languida illinc\\neiusdem sterilis se decus meque senior aurum, tot.\\n\\n- Non videre dedit\\n- Duabus casus plures pomis legit cervice pennisque\\n- Exstat quas\\n- Concretaque videri eatque hederarum tuisque\\n- Foedat mora umbras Partheniumque admovet adfusaque medio\\n\\n## Adversos duros tamquam altissimus\\n\\nNunc vetitum hinc, discedite observo, annis, exhalarunt laetos oras mihi cervice\\nillis inpediit. Denique verbisque, validum nubigenas enim Coroneus; dat videre\\npuerum; hunc [ipsae](http://aquarumfecit.net/verique.php) roboris quaerit tota\\nquos. Trepidamque neque illo nocte et voce nec terra vellera flamma, inplet spem\\ntum ostia. Tuus quo usu ossibus turba supervenit redit ulterius; non deus\\nincaluit. Sacro fuit vires, tantummodo ipse mollescat.\\n\\nPabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox\\nsignificat, [oneri ruinas](http://milite-signaverat.com/) urbis, praeferret!\\nNatisque inplet vera ut mori edentem exspectatas secretaque utque Somnus peregit\\ncorpora!\\n\\n> *Rerum* est Echecli qui sperata sub et credi nomenque hortatibus petiere fagus\\n> ducitur. Fratres *et sit et*, Dolopum, est Danais fumant nec quis desuetudine\\n> inque paruerit aspexit.\\n\\n## Ad Phasias Pallas quae Nilus extemplo meritis\\n\\nEquarum **acrior**. Et arte septem dilapsa numen dives in enses vestigia puppe\\nintravit sermone laniataque paterque. Utque sui percaluit speciem vos terris\\nexcussit misero protectum discedit mille Alemone etiam orandus vehebat. Enim\\nfrustra. Gerunt in servat Sidone victa ut Orchomenon pericula sanguine caput\\nalimenta.\\n\\nNocti concita. Rubens quam, Proteus ad sprevere summa sonitu metaque et sororum,\\nPhrygiae, Duxerat praesens **si**. Veteres in cernenda creatus atris. Medio\\nretemptat umoribus unum ponit *perde*, anum ubi pelle, et *salici albis*, eram\\npotest *amore* grando: veretur? Duros et honore conveniunt illis nec exemplo\\nquoque: pressa.\\n\\nPlures saepe solitaque sors sui navis ad siquid cunctaque quibus amplexus\\nnurusque at spectavit enim Tiresiae, nec annis. Cedit mirantur, animae est,\\nnobis: tellus exserere victore penates, fallunt **tu oblitis serpentum**;\\ncapillis. Erat dum medio spectata tulisti, *est agri suos* melior sublime et\\nsenta facies, erubuit [memorabile](http://fores.net/leucada.html), inde?","date":"2021-01-01","slug":"post-about-dogs"}	{"slug":"post-about-dogs","user_updated":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_updated":"2021-05-22T15:25:36.039Z"}	\N
8	138	posts	2	{"id":2,"status":"published","sort":null,"user_created":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_created":"2021-05-22T14:10:47Z","user_updated":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_updated":"2021-05-22T15:25:43Z","description":"Pabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox significat, urbis, praeferret!","image":"d1770136-f052-4010-b949-9f5065ea0afd","title":"Another post","content":"# Tristis paravi hac\\n\\n## Monstroque Plura mihi tuae adcommodat quem referebat\\n\\nLorem markdownum **summam bracchiaque iactum**; dixit, sic in ferrataque nec ore\\ngaudeat. In obiecta Ilion sui fumo onerosus ignara: doles male casuque species\\net cruorem. Aurorae cupit, in dubitat et cauda essem perdere languida illinc\\neiusdem sterilis se decus meque senior aurum, tot.\\n\\n- Non videre dedit\\n- Duabus casus plures pomis legit cervice pennisque\\n- Exstat quas\\n- Concretaque videri eatque hederarum tuisque\\n- Foedat mora umbras Partheniumque admovet adfusaque medio\\n\\n## Adversos duros tamquam altissimus\\n\\nNunc vetitum hinc, discedite observo, annis, exhalarunt laetos oras mihi cervice\\nillis inpediit. Denique verbisque, validum nubigenas enim Coroneus; dat videre\\npuerum; hunc [ipsae](http://aquarumfecit.net/verique.php) roboris quaerit tota\\nquos. Trepidamque neque illo nocte et voce nec terra vellera flamma, inplet spem\\ntum ostia. Tuus quo usu ossibus turba supervenit redit ulterius; non deus\\nincaluit. Sacro fuit vires, tantummodo ipse mollescat.\\n\\nPabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox\\nsignificat, [oneri ruinas](http://milite-signaverat.com/) urbis, praeferret!\\nNatisque inplet vera ut mori edentem exspectatas secretaque utque Somnus peregit\\ncorpora!\\n\\n> *Rerum* est Echecli qui sperata sub et credi nomenque hortatibus petiere fagus\\n> ducitur. Fratres *et sit et*, Dolopum, est Danais fumant nec quis desuetudine\\n> inque paruerit aspexit.\\n\\n## Ad Phasias Pallas quae Nilus extemplo meritis\\n\\nEquarum **acrior**. Et arte septem dilapsa numen dives in enses vestigia puppe\\nintravit sermone laniataque paterque. Utque sui percaluit speciem vos terris\\nexcussit misero protectum discedit mille Alemone etiam orandus vehebat. Enim\\nfrustra. Gerunt in servat Sidone victa ut Orchomenon pericula sanguine caput\\nalimenta.\\n\\nNocti concita. Rubens quam, Proteus ad sprevere summa sonitu metaque et sororum,\\nPhrygiae, Duxerat praesens **si**. Veteres in cernenda creatus atris. Medio\\nretemptat umoribus unum ponit *perde*, anum ubi pelle, et *salici albis*, eram\\npotest *amore* grando: veretur? Duros et honore conveniunt illis nec exemplo\\nquoque: pressa.\\n\\nPlures saepe solitaque sors sui navis ad siquid cunctaque quibus amplexus\\nnurusque at spectavit enim Tiresiae, nec annis. Cedit mirantur, animae est,\\nnobis: tellus exserere victore penates, fallunt **tu oblitis serpentum**;\\ncapillis. Erat dum medio spectata tulisti, *est agri suos* melior sublime et\\nsenta facies, erubuit [memorabile](http://fores.net/leucada.html), inde?","date":"2021-05-22","slug":"another-post"}	{"slug":"another-post","user_updated":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_updated":"2021-05-22T15:25:43.195Z"}	\N
9	139	posts	1	{"id":1,"status":"published","sort":null,"user_created":"34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf","date_created":"2021-05-19T14:16:22Z","user_updated":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_updated":"2021-05-22T16:39:18Z","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.","image":"dd1b97dd-b289-4fc6-a61e-a6e925e88c38","title":"A post about dogs","content":"Lorem markdownum **summam bracchiaque iactum**; dixit, sic in ferrataque nec ore\\ngaudeat. In obiecta Ilion sui fumo onerosus ignara: doles male casuque species\\net cruorem. Aurorae cupit, in dubitat et cauda essem perdere languida illinc\\neiusdem sterilis se decus meque senior aurum, tot.\\n\\n- Non videre dedit\\n- Duabus casus plures pomis legit cervice pennisque\\n- Exstat quas\\n- Concretaque videri eatque hederarum tuisque\\n- Foedat mora umbras Partheniumque admovet adfusaque medio\\n\\n## Adversos duros tamquam altissimus\\n\\nNunc vetitum hinc, discedite observo, annis, exhalarunt laetos oras mihi cervice\\nillis inpediit. Denique verbisque, validum nubigenas enim Coroneus; dat videre\\npuerum; hunc [ipsae](http://aquarumfecit.net/verique.php) roboris quaerit tota\\nquos. Trepidamque neque illo nocte et voce nec terra vellera flamma, inplet spem\\ntum ostia. Tuus quo usu ossibus turba supervenit redit ulterius; non deus\\nincaluit. Sacro fuit vires, tantummodo ipse mollescat.\\n\\nPabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox\\nsignificat, [oneri ruinas](http://milite-signaverat.com/) urbis, praeferret!\\nNatisque inplet vera ut mori edentem exspectatas secretaque utque Somnus peregit\\ncorpora!\\n\\n> *Rerum* est Echecli qui sperata sub et credi nomenque hortatibus petiere fagus\\n> ducitur. Fratres *et sit et*, Dolopum, est Danais fumant nec quis desuetudine\\n> inque paruerit aspexit.\\n\\n## Ad Phasias Pallas quae Nilus extemplo meritis\\n\\nEquarum **acrior**. Et arte septem dilapsa numen dives in enses vestigia puppe\\nintravit sermone laniataque paterque. Utque sui percaluit speciem vos terris\\nexcussit misero protectum discedit mille Alemone etiam orandus vehebat. Enim\\nfrustra. Gerunt in servat Sidone victa ut Orchomenon pericula sanguine caput\\nalimenta.\\n\\nNocti concita. Rubens quam, Proteus ad sprevere summa sonitu metaque et sororum,\\nPhrygiae, Duxerat praesens **si**. Veteres in cernenda creatus atris. Medio\\nretemptat umoribus unum ponit *perde*, anum ubi pelle, et *salici albis*, eram\\npotest *amore* grando: veretur? Duros et honore conveniunt illis nec exemplo\\nquoque: pressa.\\n\\nPlures saepe solitaque sors sui navis ad siquid cunctaque quibus amplexus\\nnurusque at spectavit enim Tiresiae, nec annis. Cedit mirantur, animae est,\\nnobis: tellus exserere victore penates, fallunt **tu oblitis serpentum**;\\ncapillis. Erat dum medio spectata tulisti, *est agri suos* melior sublime et\\nsenta facies, erubuit [memorabile](http://fores.net/leucada.html), inde?","date":"2021-01-01","slug":"post-about-dogs"}	{"content":"Lorem markdownum **summam bracchiaque iactum**; dixit, sic in ferrataque nec ore\\ngaudeat. In obiecta Ilion sui fumo onerosus ignara: doles male casuque species\\net cruorem. Aurorae cupit, in dubitat et cauda essem perdere languida illinc\\neiusdem sterilis se decus meque senior aurum, tot.\\n\\n- Non videre dedit\\n- Duabus casus plures pomis legit cervice pennisque\\n- Exstat quas\\n- Concretaque videri eatque hederarum tuisque\\n- Foedat mora umbras Partheniumque admovet adfusaque medio\\n\\n## Adversos duros tamquam altissimus\\n\\nNunc vetitum hinc, discedite observo, annis, exhalarunt laetos oras mihi cervice\\nillis inpediit. Denique verbisque, validum nubigenas enim Coroneus; dat videre\\npuerum; hunc [ipsae](http://aquarumfecit.net/verique.php) roboris quaerit tota\\nquos. Trepidamque neque illo nocte et voce nec terra vellera flamma, inplet spem\\ntum ostia. Tuus quo usu ossibus turba supervenit redit ulterius; non deus\\nincaluit. Sacro fuit vires, tantummodo ipse mollescat.\\n\\nPabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox\\nsignificat, [oneri ruinas](http://milite-signaverat.com/) urbis, praeferret!\\nNatisque inplet vera ut mori edentem exspectatas secretaque utque Somnus peregit\\ncorpora!\\n\\n> *Rerum* est Echecli qui sperata sub et credi nomenque hortatibus petiere fagus\\n> ducitur. Fratres *et sit et*, Dolopum, est Danais fumant nec quis desuetudine\\n> inque paruerit aspexit.\\n\\n## Ad Phasias Pallas quae Nilus extemplo meritis\\n\\nEquarum **acrior**. Et arte septem dilapsa numen dives in enses vestigia puppe\\nintravit sermone laniataque paterque. Utque sui percaluit speciem vos terris\\nexcussit misero protectum discedit mille Alemone etiam orandus vehebat. Enim\\nfrustra. Gerunt in servat Sidone victa ut Orchomenon pericula sanguine caput\\nalimenta.\\n\\nNocti concita. Rubens quam, Proteus ad sprevere summa sonitu metaque et sororum,\\nPhrygiae, Duxerat praesens **si**. Veteres in cernenda creatus atris. Medio\\nretemptat umoribus unum ponit *perde*, anum ubi pelle, et *salici albis*, eram\\npotest *amore* grando: veretur? Duros et honore conveniunt illis nec exemplo\\nquoque: pressa.\\n\\nPlures saepe solitaque sors sui navis ad siquid cunctaque quibus amplexus\\nnurusque at spectavit enim Tiresiae, nec annis. Cedit mirantur, animae est,\\nnobis: tellus exserere victore penates, fallunt **tu oblitis serpentum**;\\ncapillis. Erat dum medio spectata tulisti, *est agri suos* melior sublime et\\nsenta facies, erubuit [memorabile](http://fores.net/leucada.html), inde?","user_updated":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_updated":"2021-05-22T16:39:18.945Z"}	\N
10	140	posts	2	{"id":2,"status":"published","sort":null,"user_created":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_created":"2021-05-22T14:10:47Z","user_updated":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_updated":"2021-05-22T16:39:49Z","description":"Pabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox significat, urbis, praeferret!","image":"d1770136-f052-4010-b949-9f5065ea0afd","title":"Another post","content":"Lorem markdownum **summam bracchiaque iactum**; dixit, sic in ferrataque nec ore\\ngaudeat. In obiecta Ilion sui fumo onerosus ignara: doles male casuque species\\net cruorem. Aurorae cupit, in dubitat et cauda essem perdere languida illinc\\neiusdem sterilis se decus meque senior aurum, tot.\\n\\n- Non videre dedit\\n- Duabus casus plures pomis legit cervice pennisque\\n- Exstat quas\\n- Concretaque videri eatque hederarum tuisque\\n- Foedat mora umbras Partheniumque admovet adfusaque medio\\n\\n## Adversos duros tamquam altissimus\\n\\nNunc vetitum hinc, discedite observo, annis, exhalarunt laetos oras mihi cervice\\nillis inpediit. Denique verbisque, validum nubigenas enim Coroneus; dat videre\\npuerum; hunc [ipsae](http://aquarumfecit.net/verique.php) roboris quaerit tota\\nquos. Trepidamque neque illo nocte et voce nec terra vellera flamma, inplet spem\\ntum ostia. Tuus quo usu ossibus turba supervenit redit ulterius; non deus\\nincaluit. Sacro fuit vires, tantummodo ipse mollescat.\\n\\nPabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox\\nsignificat, [oneri ruinas](http://milite-signaverat.com/) urbis, praeferret!\\nNatisque inplet vera ut mori edentem exspectatas secretaque utque Somnus peregit\\ncorpora!\\n\\n> *Rerum* est Echecli qui sperata sub et credi nomenque hortatibus petiere fagus\\n> ducitur. Fratres *et sit et*, Dolopum, est Danais fumant nec quis desuetudine\\n> inque paruerit aspexit.\\n\\n## Ad Phasias Pallas quae Nilus extemplo meritis\\n\\nEquarum **acrior**. Et arte septem dilapsa numen dives in enses vestigia puppe\\nintravit sermone laniataque paterque. Utque sui percaluit speciem vos terris\\nexcussit misero protectum discedit mille Alemone etiam orandus vehebat. Enim\\nfrustra. Gerunt in servat Sidone victa ut Orchomenon pericula sanguine caput\\nalimenta.\\n\\nNocti concita. Rubens quam, Proteus ad sprevere summa sonitu metaque et sororum,\\nPhrygiae, Duxerat praesens **si**. Veteres in cernenda creatus atris. Medio\\nretemptat umoribus unum ponit *perde*, anum ubi pelle, et *salici albis*, eram\\npotest *amore* grando: veretur? Duros et honore conveniunt illis nec exemplo\\nquoque: pressa.\\n\\nPlures saepe solitaque sors sui navis ad siquid cunctaque quibus amplexus\\nnurusque at spectavit enim Tiresiae, nec annis. Cedit mirantur, animae est,\\nnobis: tellus exserere victore penates, fallunt **tu oblitis serpentum**;\\ncapillis. Erat dum medio spectata tulisti, *est agri suos* melior sublime et\\nsenta facies, erubuit [memorabile](http://fores.net/leucada.html), inde?","date":"2021-05-22","slug":"another-post"}	{"content":"Lorem markdownum **summam bracchiaque iactum**; dixit, sic in ferrataque nec ore\\ngaudeat. In obiecta Ilion sui fumo onerosus ignara: doles male casuque species\\net cruorem. Aurorae cupit, in dubitat et cauda essem perdere languida illinc\\neiusdem sterilis se decus meque senior aurum, tot.\\n\\n- Non videre dedit\\n- Duabus casus plures pomis legit cervice pennisque\\n- Exstat quas\\n- Concretaque videri eatque hederarum tuisque\\n- Foedat mora umbras Partheniumque admovet adfusaque medio\\n\\n## Adversos duros tamquam altissimus\\n\\nNunc vetitum hinc, discedite observo, annis, exhalarunt laetos oras mihi cervice\\nillis inpediit. Denique verbisque, validum nubigenas enim Coroneus; dat videre\\npuerum; hunc [ipsae](http://aquarumfecit.net/verique.php) roboris quaerit tota\\nquos. Trepidamque neque illo nocte et voce nec terra vellera flamma, inplet spem\\ntum ostia. Tuus quo usu ossibus turba supervenit redit ulterius; non deus\\nincaluit. Sacro fuit vires, tantummodo ipse mollescat.\\n\\nPabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox\\nsignificat, [oneri ruinas](http://milite-signaverat.com/) urbis, praeferret!\\nNatisque inplet vera ut mori edentem exspectatas secretaque utque Somnus peregit\\ncorpora!\\n\\n> *Rerum* est Echecli qui sperata sub et credi nomenque hortatibus petiere fagus\\n> ducitur. Fratres *et sit et*, Dolopum, est Danais fumant nec quis desuetudine\\n> inque paruerit aspexit.\\n\\n## Ad Phasias Pallas quae Nilus extemplo meritis\\n\\nEquarum **acrior**. Et arte septem dilapsa numen dives in enses vestigia puppe\\nintravit sermone laniataque paterque. Utque sui percaluit speciem vos terris\\nexcussit misero protectum discedit mille Alemone etiam orandus vehebat. Enim\\nfrustra. Gerunt in servat Sidone victa ut Orchomenon pericula sanguine caput\\nalimenta.\\n\\nNocti concita. Rubens quam, Proteus ad sprevere summa sonitu metaque et sororum,\\nPhrygiae, Duxerat praesens **si**. Veteres in cernenda creatus atris. Medio\\nretemptat umoribus unum ponit *perde*, anum ubi pelle, et *salici albis*, eram\\npotest *amore* grando: veretur? Duros et honore conveniunt illis nec exemplo\\nquoque: pressa.\\n\\nPlures saepe solitaque sors sui navis ad siquid cunctaque quibus amplexus\\nnurusque at spectavit enim Tiresiae, nec annis. Cedit mirantur, animae est,\\nnobis: tellus exserere victore penates, fallunt **tu oblitis serpentum**;\\ncapillis. Erat dum medio spectata tulisti, *est agri suos* melior sublime et\\nsenta facies, erubuit [memorabile](http://fores.net/leucada.html), inde?","user_updated":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_updated":"2021-05-22T16:39:49.093Z"}	\N
11	141	posts	2	{"id":2,"status":"published","sort":null,"user_created":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_created":"2021-05-22T14:10:47Z","user_updated":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_updated":"2021-05-22T16:44:43Z","description":"Pabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox significat, urbis, praeferret!","image":"d1770136-f052-4010-b949-9f5065ea0afd","title":"Another post","content":"LLorem markdownum **summam bracchiaque iactum**; dixit, sic in ferrataque nec ore\\ngaudeat. In obiecta Ilion sui fumo onerosus ignara: doles male casuque species\\net cruorem. Aurorae cupit, in dubitat et cauda essem perdere languida illinc\\neiusdem sterilis se decus meque senior aurum, tot.\\n\\n- Non videre dedit\\n- Duabus casus plures pomis legit cervice pennisque\\n- Exstat quas\\n- Concretaque videri eatque hederarum tuisque\\n- Foedat mora umbras Partheniumque admovet adfusaque medio\\n\\n## Adversos duros tamquam altissimus\\n\\nNunc vetitum hinc, discedite observo, annis, exhalarunt laetos oras mihi cervice\\nillis inpediit. Denique verbisque, validum nubigenas enim Coroneus; dat videre\\npuerum; hunc [ipsae](http://aquarumfecit.net/verique.php) roboris quaerit tota\\nquos. Trepidamque neque illo nocte et voce nec terra vellera flamma, inplet spem\\ntum ostia. Tuus quo usu ossibus turba supervenit redit ulterius; non deus\\nincaluit. Sacro fuit vires, tantummodo ipse mollescat.\\n\\nPabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox\\nsignificat, [oneri ruinas](http://milite-signaverat.com/) urbis, praeferret!\\nNatisque inplet vera ut mori edentem exspectatas secretaque utque Somnus peregit\\ncorpora!\\n\\n> *Rerum* est Echecli qui sperata sub et credi nomenque hortatibus petiere fagus\\n> ducitur. Fratres *et sit et*, Dolopum, est Danais fumant nec quis desuetudine\\n> inque paruerit aspexit.\\n\\n## Ad Phasias Pallas quae Nilus extemplo meritis\\n\\nEquarum **acrior**. Et arte septem dilapsa numen dives in enses vestigia puppe\\nintravit sermone laniataque paterque. Utque sui percaluit speciem vos terris\\nexcussit misero protectum discedit mille Alemone etiam orandus vehebat. Enim\\nfrustra. Gerunt in servat Sidone victa ut Orchomenon pericula sanguine caput\\nalimenta.\\n\\nNocti concita. Rubens quam, Proteus ad sprevere summa sonitu metaque et sororum,\\nPhrygiae, Duxerat praesens **si**. Veteres in cernenda creatus atris. Medio\\nretemptat umoribus unum ponit *perde*, anum ubi pelle, et *salici albis*, eram\\npotest *amore* grando: veretur? Duros et honore conveniunt illis nec exemplo\\nquoque: pressa.\\n\\nPlures saepe solitaque sors sui navis ad siquid cunctaque quibus amplexus\\nnurusque at spectavit enim Tiresiae, nec annis. Cedit mirantur, animae est,\\nnobis: tellus exserere victore penates, fallunt **tu oblitis serpentum**;\\ncapillis. Erat dum medio spectata tulisti, *est agri suos* melior sublime et\\nsenta facies, erubuit [memorabile](http://fores.net/leucada.html), inde?","date":"2021-05-22","slug":"another-post"}	{"content":"LLorem markdownum **summam bracchiaque iactum**; dixit, sic in ferrataque nec ore\\ngaudeat. In obiecta Ilion sui fumo onerosus ignara: doles male casuque species\\net cruorem. Aurorae cupit, in dubitat et cauda essem perdere languida illinc\\neiusdem sterilis se decus meque senior aurum, tot.\\n\\n- Non videre dedit\\n- Duabus casus plures pomis legit cervice pennisque\\n- Exstat quas\\n- Concretaque videri eatque hederarum tuisque\\n- Foedat mora umbras Partheniumque admovet adfusaque medio\\n\\n## Adversos duros tamquam altissimus\\n\\nNunc vetitum hinc, discedite observo, annis, exhalarunt laetos oras mihi cervice\\nillis inpediit. Denique verbisque, validum nubigenas enim Coroneus; dat videre\\npuerum; hunc [ipsae](http://aquarumfecit.net/verique.php) roboris quaerit tota\\nquos. Trepidamque neque illo nocte et voce nec terra vellera flamma, inplet spem\\ntum ostia. Tuus quo usu ossibus turba supervenit redit ulterius; non deus\\nincaluit. Sacro fuit vires, tantummodo ipse mollescat.\\n\\nPabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox\\nsignificat, [oneri ruinas](http://milite-signaverat.com/) urbis, praeferret!\\nNatisque inplet vera ut mori edentem exspectatas secretaque utque Somnus peregit\\ncorpora!\\n\\n> *Rerum* est Echecli qui sperata sub et credi nomenque hortatibus petiere fagus\\n> ducitur. Fratres *et sit et*, Dolopum, est Danais fumant nec quis desuetudine\\n> inque paruerit aspexit.\\n\\n## Ad Phasias Pallas quae Nilus extemplo meritis\\n\\nEquarum **acrior**. Et arte septem dilapsa numen dives in enses vestigia puppe\\nintravit sermone laniataque paterque. Utque sui percaluit speciem vos terris\\nexcussit misero protectum discedit mille Alemone etiam orandus vehebat. Enim\\nfrustra. Gerunt in servat Sidone victa ut Orchomenon pericula sanguine caput\\nalimenta.\\n\\nNocti concita. Rubens quam, Proteus ad sprevere summa sonitu metaque et sororum,\\nPhrygiae, Duxerat praesens **si**. Veteres in cernenda creatus atris. Medio\\nretemptat umoribus unum ponit *perde*, anum ubi pelle, et *salici albis*, eram\\npotest *amore* grando: veretur? Duros et honore conveniunt illis nec exemplo\\nquoque: pressa.\\n\\nPlures saepe solitaque sors sui navis ad siquid cunctaque quibus amplexus\\nnurusque at spectavit enim Tiresiae, nec annis. Cedit mirantur, animae est,\\nnobis: tellus exserere victore penates, fallunt **tu oblitis serpentum**;\\ncapillis. Erat dum medio spectata tulisti, *est agri suos* melior sublime et\\nsenta facies, erubuit [memorabile](http://fores.net/leucada.html), inde?","user_updated":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_updated":"2021-05-22T16:44:43.894Z"}	\N
12	142	posts	1	{"id":1,"status":"published","sort":null,"user_created":"34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf","date_created":"2021-05-19T14:16:22Z","user_updated":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_updated":"2021-05-26T08:00:53Z","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.","image":"dd1b97dd-b289-4fc6-a61e-a6e925e88c38","title":"A post about dogs!","content":"Lorem markdownum **summam bracchiaque iactum**; dixit, sic in ferrataque nec ore\\ngaudeat. In obiecta Ilion sui fumo onerosus ignara: doles male casuque species\\net cruorem. Aurorae cupit, in dubitat et cauda essem perdere languida illinc\\neiusdem sterilis se decus meque senior aurum, tot.\\n\\n- Non videre dedit\\n- Duabus casus plures pomis legit cervice pennisque\\n- Exstat quas\\n- Concretaque videri eatque hederarum tuisque\\n- Foedat mora umbras Partheniumque admovet adfusaque medio\\n\\n## Adversos duros tamquam altissimus\\n\\nNunc vetitum hinc, discedite observo, annis, exhalarunt laetos oras mihi cervice\\nillis inpediit. Denique verbisque, validum nubigenas enim Coroneus; dat videre\\npuerum; hunc [ipsae](http://aquarumfecit.net/verique.php) roboris quaerit tota\\nquos. Trepidamque neque illo nocte et voce nec terra vellera flamma, inplet spem\\ntum ostia. Tuus quo usu ossibus turba supervenit redit ulterius; non deus\\nincaluit. Sacro fuit vires, tantummodo ipse mollescat.\\n\\nPabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox\\nsignificat, [oneri ruinas](http://milite-signaverat.com/) urbis, praeferret!\\nNatisque inplet vera ut mori edentem exspectatas secretaque utque Somnus peregit\\ncorpora!\\n\\n> *Rerum* est Echecli qui sperata sub et credi nomenque hortatibus petiere fagus\\n> ducitur. Fratres *et sit et*, Dolopum, est Danais fumant nec quis desuetudine\\n> inque paruerit aspexit.\\n\\n## Ad Phasias Pallas quae Nilus extemplo meritis\\n\\nEquarum **acrior**. Et arte septem dilapsa numen dives in enses vestigia puppe\\nintravit sermone laniataque paterque. Utque sui percaluit speciem vos terris\\nexcussit misero protectum discedit mille Alemone etiam orandus vehebat. Enim\\nfrustra. Gerunt in servat Sidone victa ut Orchomenon pericula sanguine caput\\nalimenta.\\n\\nNocti concita. Rubens quam, Proteus ad sprevere summa sonitu metaque et sororum,\\nPhrygiae, Duxerat praesens **si**. Veteres in cernenda creatus atris. Medio\\nretemptat umoribus unum ponit *perde*, anum ubi pelle, et *salici albis*, eram\\npotest *amore* grando: veretur? Duros et honore conveniunt illis nec exemplo\\nquoque: pressa.\\n\\nPlures saepe solitaque sors sui navis ad siquid cunctaque quibus amplexus\\nnurusque at spectavit enim Tiresiae, nec annis. Cedit mirantur, animae est,\\nnobis: tellus exserere victore penates, fallunt **tu oblitis serpentum**;\\ncapillis. Erat dum medio spectata tulisti, *est agri suos* melior sublime et\\nsenta facies, erubuit [memorabile](http://fores.net/leucada.html), inde?","date":"2021-01-01","slug":"post-about-dogs"}	{"title":"A post about dogs!","user_updated":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_updated":"2021-05-26T08:00:53.328Z"}	\N
13	143	posts	2	{"id":2,"status":"published","sort":null,"user_created":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_created":"2021-05-22T14:10:47Z","user_updated":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_updated":"2021-05-26T08:57:33Z","description":"Pabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox significat, urbis, praeferret!","image":"d1770136-f052-4010-b949-9f5065ea0afd","title":"Another post!","content":"LLorem markdownum **summam bracchiaque iactum**; dixit, sic in ferrataque nec ore\\ngaudeat. In obiecta Ilion sui fumo onerosus ignara: doles male casuque species\\net cruorem. Aurorae cupit, in dubitat et cauda essem perdere languida illinc\\neiusdem sterilis se decus meque senior **aurum**, tot.\\n\\n- Non videre dedit\\n- Duabus casus plures pomis legit cervice pennisque\\n- Exstat quas\\n- Concretaque videri eatque hederarum tuisque\\n- Foedat mora umbras Partheniumque admovet adfusaque medio\\n\\n## Adversos duros tamquam altissimus\\n\\nNunc vetitum hinc, discedite observo, annis, exhalarunt laetos oras mihi cervice\\nillis inpediit. Denique verbisque, validum nubigenas enim Coroneus; dat videre\\npuerum; hunc [ipsae](http://aquarumfecit.net/verique.php) roboris quaerit tota\\nquos. Trepidamque neque illo nocte et voce nec terra vellera flamma, inplet spem\\ntum ostia. Tuus quo usu ossibus turba supervenit redit ulterius; non deus\\nincaluit. Sacro fuit vires, tantummodo ipse mollescat.\\n\\nPabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox\\nsignificat, [oneri ruinas](http://milite-signaverat.com/) urbis, praeferret!\\nNatisque inplet vera ut mori edentem exspectatas secretaque utque Somnus peregit\\ncorpora!\\n\\n> *Rerum* est Echecli qui sperata sub et credi nomenque hortatibus petiere fagus\\n> ducitur. Fratres *et sit et*, Dolopum, est Danais fumant nec quis desuetudine\\n> inque paruerit aspexit.\\n\\n## Ad Phasias Pallas quae Nilus extemplo meritis\\n\\nEquarum **acrior**. Et arte septem dilapsa numen dives in enses vestigia puppe\\nintravit sermone laniataque paterque. Utque sui percaluit speciem vos terris\\nexcussit misero protectum discedit mille Alemone etiam orandus vehebat. Enim\\nfrustra. Gerunt in servat Sidone victa ut Orchomenon pericula sanguine caput\\nalimenta.\\n\\nNocti concita. Rubens quam, Proteus ad sprevere summa sonitu metaque et sororum,\\nPhrygiae, Duxerat praesens **si**. Veteres in cernenda creatus atris. Medio\\nretemptat umoribus unum ponit *perde*, anum ubi pelle, et *salici albis*, eram\\npotest *amore* grando: veretur? Duros et honore conveniunt illis nec exemplo\\nquoque: pressa.\\n\\nPlures saepe solitaque sors sui navis ad siquid cunctaque quibus amplexus\\nnurusque at spectavit enim Tiresiae, nec annis. Cedit mirantur, animae est,\\nnobis: tellus exserere victore penates, fallunt **tu oblitis serpentum**;\\ncapillis. Erat dum medio spectata tulisti, *est agri suos* melior sublime et\\nsenta facies, erubuit [memorabile](http://fores.net/leucada.html), inde?","date":"2021-05-22","slug":"another-post-lasd-lasdf"}	{"title":"Another post!","content":"LLorem markdownum **summam bracchiaque iactum**; dixit, sic in ferrataque nec ore\\ngaudeat. In obiecta Ilion sui fumo onerosus ignara: doles male casuque species\\net cruorem. Aurorae cupit, in dubitat et cauda essem perdere languida illinc\\neiusdem sterilis se decus meque senior **aurum**, tot.\\n\\n- Non videre dedit\\n- Duabus casus plures pomis legit cervice pennisque\\n- Exstat quas\\n- Concretaque videri eatque hederarum tuisque\\n- Foedat mora umbras Partheniumque admovet adfusaque medio\\n\\n## Adversos duros tamquam altissimus\\n\\nNunc vetitum hinc, discedite observo, annis, exhalarunt laetos oras mihi cervice\\nillis inpediit. Denique verbisque, validum nubigenas enim Coroneus; dat videre\\npuerum; hunc [ipsae](http://aquarumfecit.net/verique.php) roboris quaerit tota\\nquos. Trepidamque neque illo nocte et voce nec terra vellera flamma, inplet spem\\ntum ostia. Tuus quo usu ossibus turba supervenit redit ulterius; non deus\\nincaluit. Sacro fuit vires, tantummodo ipse mollescat.\\n\\nPabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox\\nsignificat, [oneri ruinas](http://milite-signaverat.com/) urbis, praeferret!\\nNatisque inplet vera ut mori edentem exspectatas secretaque utque Somnus peregit\\ncorpora!\\n\\n> *Rerum* est Echecli qui sperata sub et credi nomenque hortatibus petiere fagus\\n> ducitur. Fratres *et sit et*, Dolopum, est Danais fumant nec quis desuetudine\\n> inque paruerit aspexit.\\n\\n## Ad Phasias Pallas quae Nilus extemplo meritis\\n\\nEquarum **acrior**. Et arte septem dilapsa numen dives in enses vestigia puppe\\nintravit sermone laniataque paterque. Utque sui percaluit speciem vos terris\\nexcussit misero protectum discedit mille Alemone etiam orandus vehebat. Enim\\nfrustra. Gerunt in servat Sidone victa ut Orchomenon pericula sanguine caput\\nalimenta.\\n\\nNocti concita. Rubens quam, Proteus ad sprevere summa sonitu metaque et sororum,\\nPhrygiae, Duxerat praesens **si**. Veteres in cernenda creatus atris. Medio\\nretemptat umoribus unum ponit *perde*, anum ubi pelle, et *salici albis*, eram\\npotest *amore* grando: veretur? Duros et honore conveniunt illis nec exemplo\\nquoque: pressa.\\n\\nPlures saepe solitaque sors sui navis ad siquid cunctaque quibus amplexus\\nnurusque at spectavit enim Tiresiae, nec annis. Cedit mirantur, animae est,\\nnobis: tellus exserere victore penates, fallunt **tu oblitis serpentum**;\\ncapillis. Erat dum medio spectata tulisti, *est agri suos* melior sublime et\\nsenta facies, erubuit [memorabile](http://fores.net/leucada.html), inde?","slug":"another-post-lasd-lasdf","user_updated":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_updated":"2021-05-26T08:57:33.229Z"}	\N
14	144	posts	2	{"id":2,"status":"published","sort":null,"user_created":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_created":"2021-05-22T14:10:47Z","user_updated":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_updated":"2021-05-26T08:57:46Z","description":"Pabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox significat, urbis, praeferret!","image":"d1770136-f052-4010-b949-9f5065ea0afd","title":"Another post!","content":"LLorem markdownum **summam bracchiaque iactum**; dixit, sic in ferrataque nec ore\\ngaudeat. In obiecta Ilion sui fumo onerosus ignara: doles male casuque species\\net cruorem. Aurorae cupit, in dubitat et cauda essem perdere languida illinc\\neiusdem sterilis se decus meque senior **aurum**, tot.\\n\\n- Non videre dedit\\n- Duabus casus plures pomis legit cervice pennisque\\n- Exstat quas\\n- Concretaque videri eatque hederarum tuisque\\n- Foedat mora umbras Partheniumque admovet adfusaque medio\\n\\n## Adversos duros tamquam altissimus\\n\\nNunc vetitum hinc, discedite observo, annis, exhalarunt laetos oras mihi cervice\\nillis inpediit. Denique verbisque, validum nubigenas enim Coroneus; dat videre\\npuerum; hunc [ipsae](http://aquarumfecit.net/verique.php) roboris quaerit tota\\nquos. Trepidamque neque illo nocte et voce nec terra vellera flamma, inplet spem\\ntum ostia. Tuus quo usu ossibus turba supervenit redit ulterius; non deus\\nincaluit. Sacro fuit vires, tantummodo ipse mollescat.\\n\\nPabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox\\nsignificat, [oneri ruinas](http://milite-signaverat.com/) urbis, praeferret!\\nNatisque inplet vera ut mori edentem exspectatas secretaque utque Somnus peregit\\ncorpora!\\n\\n> *Rerum* est Echecli qui sperata sub et credi nomenque hortatibus petiere fagus\\n> ducitur. Fratres *et sit et*, Dolopum, est Danais fumant nec quis desuetudine\\n> inque paruerit aspexit.\\n\\n## Ad Phasias Pallas quae Nilus extemplo meritis\\n\\nEquarum **acrior**. Et arte septem dilapsa numen dives in enses vestigia puppe\\nintravit sermone laniataque paterque. Utque sui percaluit speciem vos terris\\nexcussit misero protectum discedit mille Alemone etiam orandus vehebat. Enim\\nfrustra. Gerunt in servat Sidone victa ut Orchomenon pericula sanguine caput\\nalimenta.\\n\\nNocti concita. Rubens quam, Proteus ad sprevere summa sonitu metaque et sororum,\\nPhrygiae, Duxerat praesens **si**. Veteres in cernenda creatus atris. Medio\\nretemptat umoribus unum ponit *perde*, anum ubi pelle, et *salici albis*, eram\\npotest *amore* grando: veretur? Duros et honore conveniunt illis nec exemplo\\nquoque: pressa.\\n\\nPlures saepe solitaque sors sui navis ad siquid cunctaque quibus amplexus\\nnurusque at spectavit enim Tiresiae, nec annis. Cedit mirantur, animae est,\\nnobis: tellus exserere victore penates, fallunt **tu oblitis serpentum**;\\ncapillis. Erat dum medio spectata tulisti, *est agri suos* melior sublime et\\nsenta facies, erubuit [memorabile](http://fores.net/leucada.html), inde?","date":"2021-05-22","slug":"another-post"}	{"slug":"another-post","user_updated":"ea19fca6-9bff-40be-bac4-da69c38a902e","date_updated":"2021-05-26T08:57:46.919Z"}	\N
\.


--
-- Data for Name: directus_roles; Type: TABLE DATA; Schema: public; Owner: directus
--

COPY public.directus_roles (id, name, icon, description, ip_access, enforce_tfa, module_list, collection_list, admin_access, app_access) FROM stdin;
a439b4aa-2366-4d35-96eb-83b96cc6201d	Admin	supervised_user_circle	\N	\N	f	\N	\N	t	t
\.


--
-- Data for Name: directus_sessions; Type: TABLE DATA; Schema: public; Owner: directus
--

COPY public.directus_sessions (token, "user", expires, ip, user_agent) FROM stdin;
mlXMu11uLHjfcPBg8XrYgDd9EzbULT3WoY38CoNTjqGA8rk1BlkIv73Dfqej6que	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-06-02 09:57:34.675+00	::ffff:172.26.0.1	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36
\.


--
-- Data for Name: directus_settings; Type: TABLE DATA; Schema: public; Owner: directus
--

COPY public.directus_settings (id, project_name, project_url, project_color, project_logo, public_foreground, public_background, public_note, auth_login_attempts, auth_password_policy, storage_asset_transform, storage_asset_presets, custom_css) FROM stdin;
\.


--
-- Data for Name: directus_users; Type: TABLE DATA; Schema: public; Owner: directus
--

COPY public.directus_users (id, first_name, last_name, email, password, location, title, description, tags, avatar, language, theme, tfa_secret, status, role, token, last_access, last_page) FROM stdin;
ea19fca6-9bff-40be-bac4-da69c38a902e	\N	\N	admin@sehn.dev	$argon2i$v=19$m=4096,t=3,p=1$0ob7jR7dZkBopXQnMeir+A$WaBDDIX1vV4tJgethmTC8xcij3FjF16EED2N1VZjHpc	\N	\N	\N	\N	\N	en-US	auto	\N	active	a439b4aa-2366-4d35-96eb-83b96cc6201d	\N	2021-05-26 09:59:47.688+00	/collections/posts
\.


--
-- Data for Name: directus_webhooks; Type: TABLE DATA; Schema: public; Owner: directus
--

COPY public.directus_webhooks (id, name, method, url, status, data, actions, collections) FROM stdin;
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: directus
--

COPY public.posts (id, status, sort, user_created, date_created, user_updated, date_updated, description, image, title, content, date, slug) FROM stdin;
1	published	\N	34e7c0bd-89cc-4199-a6af-ba8d1dc90ccf	2021-05-19 14:16:22.411+00	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-26 08:00:53.328+00	Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.	dd1b97dd-b289-4fc6-a61e-a6e925e88c38	A post about dogs!	Lorem markdownum **summam bracchiaque iactum**; dixit, sic in ferrataque nec ore\ngaudeat. In obiecta Ilion sui fumo onerosus ignara: doles male casuque species\net cruorem. Aurorae cupit, in dubitat et cauda essem perdere languida illinc\neiusdem sterilis se decus meque senior aurum, tot.\n\n- Non videre dedit\n- Duabus casus plures pomis legit cervice pennisque\n- Exstat quas\n- Concretaque videri eatque hederarum tuisque\n- Foedat mora umbras Partheniumque admovet adfusaque medio\n\n## Adversos duros tamquam altissimus\n\nNunc vetitum hinc, discedite observo, annis, exhalarunt laetos oras mihi cervice\nillis inpediit. Denique verbisque, validum nubigenas enim Coroneus; dat videre\npuerum; hunc [ipsae](http://aquarumfecit.net/verique.php) roboris quaerit tota\nquos. Trepidamque neque illo nocte et voce nec terra vellera flamma, inplet spem\ntum ostia. Tuus quo usu ossibus turba supervenit redit ulterius; non deus\nincaluit. Sacro fuit vires, tantummodo ipse mollescat.\n\nPabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox\nsignificat, [oneri ruinas](http://milite-signaverat.com/) urbis, praeferret!\nNatisque inplet vera ut mori edentem exspectatas secretaque utque Somnus peregit\ncorpora!\n\n> *Rerum* est Echecli qui sperata sub et credi nomenque hortatibus petiere fagus\n> ducitur. Fratres *et sit et*, Dolopum, est Danais fumant nec quis desuetudine\n> inque paruerit aspexit.\n\n## Ad Phasias Pallas quae Nilus extemplo meritis\n\nEquarum **acrior**. Et arte septem dilapsa numen dives in enses vestigia puppe\nintravit sermone laniataque paterque. Utque sui percaluit speciem vos terris\nexcussit misero protectum discedit mille Alemone etiam orandus vehebat. Enim\nfrustra. Gerunt in servat Sidone victa ut Orchomenon pericula sanguine caput\nalimenta.\n\nNocti concita. Rubens quam, Proteus ad sprevere summa sonitu metaque et sororum,\nPhrygiae, Duxerat praesens **si**. Veteres in cernenda creatus atris. Medio\nretemptat umoribus unum ponit *perde*, anum ubi pelle, et *salici albis*, eram\npotest *amore* grando: veretur? Duros et honore conveniunt illis nec exemplo\nquoque: pressa.\n\nPlures saepe solitaque sors sui navis ad siquid cunctaque quibus amplexus\nnurusque at spectavit enim Tiresiae, nec annis. Cedit mirantur, animae est,\nnobis: tellus exserere victore penates, fallunt **tu oblitis serpentum**;\ncapillis. Erat dum medio spectata tulisti, *est agri suos* melior sublime et\nsenta facies, erubuit [memorabile](http://fores.net/leucada.html), inde?	2021-01-01	post-about-dogs
2	published	\N	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-22 14:10:47.237+00	ea19fca6-9bff-40be-bac4-da69c38a902e	2021-05-26 08:57:46.919+00	Pabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox significat, urbis, praeferret!	d1770136-f052-4010-b949-9f5065ea0afd	Another post!	LLorem markdownum **summam bracchiaque iactum**; dixit, sic in ferrataque nec ore\ngaudeat. In obiecta Ilion sui fumo onerosus ignara: doles male casuque species\net cruorem. Aurorae cupit, in dubitat et cauda essem perdere languida illinc\neiusdem sterilis se decus meque senior **aurum**, tot.\n\n- Non videre dedit\n- Duabus casus plures pomis legit cervice pennisque\n- Exstat quas\n- Concretaque videri eatque hederarum tuisque\n- Foedat mora umbras Partheniumque admovet adfusaque medio\n\n## Adversos duros tamquam altissimus\n\nNunc vetitum hinc, discedite observo, annis, exhalarunt laetos oras mihi cervice\nillis inpediit. Denique verbisque, validum nubigenas enim Coroneus; dat videre\npuerum; hunc [ipsae](http://aquarumfecit.net/verique.php) roboris quaerit tota\nquos. Trepidamque neque illo nocte et voce nec terra vellera flamma, inplet spem\ntum ostia. Tuus quo usu ossibus turba supervenit redit ulterius; non deus\nincaluit. Sacro fuit vires, tantummodo ipse mollescat.\n\nPabula fecit! Acuto cesserunt sublimia ulla recentes res imagine tanta, nox\nsignificat, [oneri ruinas](http://milite-signaverat.com/) urbis, praeferret!\nNatisque inplet vera ut mori edentem exspectatas secretaque utque Somnus peregit\ncorpora!\n\n> *Rerum* est Echecli qui sperata sub et credi nomenque hortatibus petiere fagus\n> ducitur. Fratres *et sit et*, Dolopum, est Danais fumant nec quis desuetudine\n> inque paruerit aspexit.\n\n## Ad Phasias Pallas quae Nilus extemplo meritis\n\nEquarum **acrior**. Et arte septem dilapsa numen dives in enses vestigia puppe\nintravit sermone laniataque paterque. Utque sui percaluit speciem vos terris\nexcussit misero protectum discedit mille Alemone etiam orandus vehebat. Enim\nfrustra. Gerunt in servat Sidone victa ut Orchomenon pericula sanguine caput\nalimenta.\n\nNocti concita. Rubens quam, Proteus ad sprevere summa sonitu metaque et sororum,\nPhrygiae, Duxerat praesens **si**. Veteres in cernenda creatus atris. Medio\nretemptat umoribus unum ponit *perde*, anum ubi pelle, et *salici albis*, eram\npotest *amore* grando: veretur? Duros et honore conveniunt illis nec exemplo\nquoque: pressa.\n\nPlures saepe solitaque sors sui navis ad siquid cunctaque quibus amplexus\nnurusque at spectavit enim Tiresiae, nec annis. Cedit mirantur, animae est,\nnobis: tellus exserere victore penates, fallunt **tu oblitis serpentum**;\ncapillis. Erat dum medio spectata tulisti, *est agri suos* melior sublime et\nsenta facies, erubuit [memorabile](http://fores.net/leucada.html), inde?	2021-05-22	another-post
\.


--
-- Name: directus_activity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.directus_activity_id_seq', 144, true);


--
-- Name: directus_fields_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.directus_fields_id_seq', 15, true);


--
-- Name: directus_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.directus_permissions_id_seq', 2, true);


--
-- Name: directus_presets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.directus_presets_id_seq', 3, true);


--
-- Name: directus_relations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.directus_relations_id_seq', 4, true);


--
-- Name: directus_revisions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.directus_revisions_id_seq', 14, true);


--
-- Name: directus_settings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.directus_settings_id_seq', 1, false);


--
-- Name: directus_webhooks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.directus_webhooks_id_seq', 1, false);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.posts_id_seq', 2, true);


--
-- Name: directus_activity directus_activity_pkey; Type: CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_activity
    ADD CONSTRAINT directus_activity_pkey PRIMARY KEY (id);


--
-- Name: directus_collections directus_collections_pkey; Type: CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_collections
    ADD CONSTRAINT directus_collections_pkey PRIMARY KEY (collection);


--
-- Name: directus_fields directus_fields_pkey; Type: CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_fields
    ADD CONSTRAINT directus_fields_pkey PRIMARY KEY (id);


--
-- Name: directus_files directus_files_pkey; Type: CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_files
    ADD CONSTRAINT directus_files_pkey PRIMARY KEY (id);


--
-- Name: directus_folders directus_folders_pkey; Type: CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_folders
    ADD CONSTRAINT directus_folders_pkey PRIMARY KEY (id);


--
-- Name: directus_migrations directus_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_migrations
    ADD CONSTRAINT directus_migrations_pkey PRIMARY KEY (version);


--
-- Name: directus_permissions directus_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_permissions
    ADD CONSTRAINT directus_permissions_pkey PRIMARY KEY (id);


--
-- Name: directus_presets directus_presets_pkey; Type: CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_presets
    ADD CONSTRAINT directus_presets_pkey PRIMARY KEY (id);


--
-- Name: directus_relations directus_relations_pkey; Type: CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_relations
    ADD CONSTRAINT directus_relations_pkey PRIMARY KEY (id);


--
-- Name: directus_revisions directus_revisions_pkey; Type: CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_revisions
    ADD CONSTRAINT directus_revisions_pkey PRIMARY KEY (id);


--
-- Name: directus_roles directus_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_roles
    ADD CONSTRAINT directus_roles_pkey PRIMARY KEY (id);


--
-- Name: directus_sessions directus_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_sessions
    ADD CONSTRAINT directus_sessions_pkey PRIMARY KEY (token);


--
-- Name: directus_settings directus_settings_pkey; Type: CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_settings
    ADD CONSTRAINT directus_settings_pkey PRIMARY KEY (id);


--
-- Name: directus_users directus_users_email_unique; Type: CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_users
    ADD CONSTRAINT directus_users_email_unique UNIQUE (email);


--
-- Name: directus_users directus_users_pkey; Type: CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_users
    ADD CONSTRAINT directus_users_pkey PRIMARY KEY (id);


--
-- Name: directus_webhooks directus_webhooks_pkey; Type: CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_webhooks
    ADD CONSTRAINT directus_webhooks_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: posts posts_slug_unique; Type: CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_slug_unique UNIQUE (slug);


--
-- Name: directus_fields directus_fields_group_foreign; Type: FK CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_fields
    ADD CONSTRAINT directus_fields_group_foreign FOREIGN KEY ("group") REFERENCES public.directus_fields(id);


--
-- Name: directus_files directus_files_folder_foreign; Type: FK CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_files
    ADD CONSTRAINT directus_files_folder_foreign FOREIGN KEY (folder) REFERENCES public.directus_folders(id);


--
-- Name: directus_files directus_files_modified_by_foreign; Type: FK CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_files
    ADD CONSTRAINT directus_files_modified_by_foreign FOREIGN KEY (modified_by) REFERENCES public.directus_users(id);


--
-- Name: directus_files directus_files_uploaded_by_foreign; Type: FK CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_files
    ADD CONSTRAINT directus_files_uploaded_by_foreign FOREIGN KEY (uploaded_by) REFERENCES public.directus_users(id);


--
-- Name: directus_folders directus_folders_parent_foreign; Type: FK CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_folders
    ADD CONSTRAINT directus_folders_parent_foreign FOREIGN KEY (parent) REFERENCES public.directus_folders(id);


--
-- Name: directus_permissions directus_permissions_role_foreign; Type: FK CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_permissions
    ADD CONSTRAINT directus_permissions_role_foreign FOREIGN KEY (role) REFERENCES public.directus_roles(id);


--
-- Name: directus_presets directus_presets_role_foreign; Type: FK CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_presets
    ADD CONSTRAINT directus_presets_role_foreign FOREIGN KEY (role) REFERENCES public.directus_roles(id);


--
-- Name: directus_presets directus_presets_user_foreign; Type: FK CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_presets
    ADD CONSTRAINT directus_presets_user_foreign FOREIGN KEY ("user") REFERENCES public.directus_users(id);


--
-- Name: directus_revisions directus_revisions_activity_foreign; Type: FK CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_revisions
    ADD CONSTRAINT directus_revisions_activity_foreign FOREIGN KEY (activity) REFERENCES public.directus_activity(id);


--
-- Name: directus_revisions directus_revisions_parent_foreign; Type: FK CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_revisions
    ADD CONSTRAINT directus_revisions_parent_foreign FOREIGN KEY (parent) REFERENCES public.directus_revisions(id);


--
-- Name: directus_sessions directus_sessions_user_foreign; Type: FK CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_sessions
    ADD CONSTRAINT directus_sessions_user_foreign FOREIGN KEY ("user") REFERENCES public.directus_users(id);


--
-- Name: directus_settings directus_settings_project_logo_foreign; Type: FK CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_settings
    ADD CONSTRAINT directus_settings_project_logo_foreign FOREIGN KEY (project_logo) REFERENCES public.directus_files(id);


--
-- Name: directus_settings directus_settings_public_background_foreign; Type: FK CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_settings
    ADD CONSTRAINT directus_settings_public_background_foreign FOREIGN KEY (public_background) REFERENCES public.directus_files(id);


--
-- Name: directus_settings directus_settings_public_foreground_foreign; Type: FK CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_settings
    ADD CONSTRAINT directus_settings_public_foreground_foreign FOREIGN KEY (public_foreground) REFERENCES public.directus_files(id);


--
-- Name: directus_users directus_users_role_foreign; Type: FK CONSTRAINT; Schema: public; Owner: directus
--

ALTER TABLE ONLY public.directus_users
    ADD CONSTRAINT directus_users_role_foreign FOREIGN KEY (role) REFERENCES public.directus_roles(id);


--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3 (Debian 13.3-1.pgdg100+1)
-- Dumped by pg_dump version 13.3 (Debian 13.3-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE postgres;
--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: directus
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO directus;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: directus
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

